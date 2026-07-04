import { readFile } from "fs/promises";
import path from "path";

type ImageDimensions = { width: number; height: number };

/** Bytes needed from SOF marker: marker(2) + length(2) + precision(1) + height(2) + width(2) */
const JPEG_SOF_BYTES = 9;

function canReadUInt16BE(buffer: Buffer, byteOffset: number) {
  return byteOffset >= 0 && byteOffset + 2 <= buffer.length;
}

function parseImageDimensions(buffer: Buffer): ImageDimensions | null {
  if (buffer.length < 2) return null;

  // PNG: width/height in IHDR chunk
  if (
    buffer.length >= 24 &&
    buffer[0] === 0x89 &&
    buffer[1] === 0x50 &&
    buffer[2] === 0x4e &&
    buffer[3] === 0x47
  ) {
    return {
      width: buffer.readUInt32BE(16),
      height: buffer.readUInt32BE(20),
    };
  }

  // JPEG: dimensions in SOF segment
  if (buffer[0] === 0xff && buffer[1] === 0xd8) {
    let offset = 2;
    while (offset + JPEG_SOF_BYTES <= buffer.length) {
      if (buffer[offset] !== 0xff) break;
      const marker = buffer[offset + 1];
      if (marker === 0xc0 || marker === 0xc2) {
        if (
          !canReadUInt16BE(buffer, offset + 5) ||
          !canReadUInt16BE(buffer, offset + 7)
        ) {
          break;
        }
        return {
          height: buffer.readUInt16BE(offset + 5),
          width: buffer.readUInt16BE(offset + 7),
        };
      }
      if (!canReadUInt16BE(buffer, offset + 2)) break;
      const segmentLength = buffer.readUInt16BE(offset + 2);
      if (segmentLength < 2) break;
      offset += 2 + segmentLength;
      if (offset > buffer.length) break;
    }
  }

  return null;
}

function localImagePath(image: string) {
  const normalized = image.replace(/^\//, "");
  return path.join(process.cwd(), "public", normalized);
}

async function readImageBuffer(image: string): Promise<Buffer | null> {
  try {
    if (image.startsWith("http")) {
      const response = await fetch(image, { signal: AbortSignal.timeout(10_000) });
      if (!response.ok) return null;
      return Buffer.from(await response.arrayBuffer());
    }

    return readFile(localImagePath(image));
  } catch {
    return null;
  }
}

export async function getImageDimensions(
  image: string,
): Promise<ImageDimensions | null> {
  const buffer = await readImageBuffer(image);
  if (!buffer) return null;

  try {
    return parseImageDimensions(buffer);
  } catch {
    return null;
  }
}
