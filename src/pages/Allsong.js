import Slider from "../components/Slider";
import TrendingSongs from "../components/TrendingSongs";
import { ALL_MUSIC } from "../store/Allsrc";



export default function Allsong({ title, src, artist }) {
    return (
        <>
            <Slider />
            <div className="container  bg-pale-sky-50 -mt-12 rounded mb-24 p-6">
                <div
                    className="h-24 rounded border-solid bg-cover bg-center flex flex-wrap justify-evenly"
                    style={{ backgroundImage: 'url("/image/breadcrumb.jpg")' }}>
                    <p className="flex text-white font-bold text-3xl items-center	">
                    Allsong
                    </p>
                </div>
                <div className="flex flex-wrap justify-evenly" >
                    {/* <TrendingSongs src="/music/Poori - Ajal.mp3" title="ajal" artist="poori"/> */}
                    {ALL_MUSIC.Allsong.map(({ title, src, artist, audioUrl }, index) => (
                        <TrendingSongs
                            title={title}
                            src={src}
                            audioUrl={audioUrl}
                            artist={artist}

                        />
                    )
                    )}

                </div>
            </div>


        </>
    )
}