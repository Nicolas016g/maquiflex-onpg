const RELEASE_TAG = "v1.0.0-media";
const RELEASE_BASE = `https://github.com/Nicolas016g/maquiflex-onpg/releases/download/${RELEASE_TAG}`;

/** Vídeos hospedados no GitHub Releases em produção; local em desenvolvimento. */
export function mediaUrl(path: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  if (process.env.NODE_ENV === "development") return path;

  const filename = path.replace(/^\/videos\//, "");
  return `${RELEASE_BASE}/${filename}`;
}
