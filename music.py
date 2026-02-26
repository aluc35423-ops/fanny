import yt_dlp

def descargar_audio(url):
    ydl_opts = {
        'format': 'bestaudio/best',
        'cookiefile': 'cookies.txt',
        'postprocessors': [{
            'key': 'FFmpegExtractAudio',
            'preferredcodec': 'mp3',
            'preferredquality': '192',
        }],
        'outtmpl': '%(title)s.%(ext)s',
    }

    try:
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            print(f"--- Iniciando proceso para Windows 11 ---")
            ydl.download([url])
            print("\n¡Todo listo! Revisa tu carpeta.")
    except Exception as e:
        print(f"\n[!] Error detectado: {e}")
        print("\nConsejo: Si dice 'ffmpeg not found', pon el ffmpeg.exe junto a este script.")

if __name__ == "__main__":
    enlace = input("Pega el enlace de YouTube: ")
    descargar_audio(enlace)