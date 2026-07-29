const RELEASE_TAG = "v1.0.0-media";
const RELEASE_BASE = `https://github.com/Nicolas016g/maquiflex-onpg/releases/download/${RELEASE_TAG}`;

/** Vídeos hospedados no GitHub Releases em produção; arquivos locais em desenvolvimento. */
export function mediaUrl(path: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;

  const filename = path.replace(/^\/videos\//, "");

  if (typeof window !== "undefined") {
    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
      return path;
    }
  } else if (process.env.NODE_ENV === "development") {
    return path;
  }

  return `${RELEASE_BASE}/${filename}`;
}
