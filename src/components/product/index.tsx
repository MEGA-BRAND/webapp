import Image from "next/image";
import Carousel from "react-multi-carousel";

const images = [
    {
        type: "image",
        url: "https://static.zara.net/assets/public/d54d/6778/4f7d4a408bd6/5e68da497101/01887450832-a4/01887450832-a4.jpg?ts=1704878251539&w=824"
    },
    {
        type: "image",
        url: "https://static.zara.net/assets/public/d54d/6778/4f7d4a408bd6/5e68da497101/01887450832-a4/01887450832-a4.jpg?ts=1704878251539&w=824"
    },
    {
        type: "video",
        url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    },
];

export const Product = () => {
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};
	return (
		<article className="flex flex-col flex-1 h-full w-full pl-4 pr-4 pt-4 gap-2">
            <div className="relative">
                <Carousel responsive={responsive} className="h-82">
                    {images.map((item) => item.type === "image" ? (
                        <div key={item.url}>
                            <img className="border-x-pink-200 border-y-pink-300 border-8" src={item.url} alt="img1" />
                        </div>
                    ) : (
                        <video className="h-full" muted autoPlay>
                            <source src={item.url} type="video/mp4" />
                        </video>
                    ))}
                </Carousel>
                <Image
					src="/logo.png"
					alt="MegaXL"
					width={160}
					height={80}
					className="absolute bottom-1 right-1"
				/>
            </div>
			<section className="flex gap-1">
                <h1 className="text-2xl text-pink-950">Casaco Preto,</h1>
                <h2 className="flex items-end text-lg text-pink-950">25€</h2>
                <div className="flex gap-2 items-center justify-end flex-grow">
                    <div className="rounded-badge w-4 h-4 bg-green-600 drop-shadow-2xl"/>
                    <label>Disponível</label>
                </div>
            </section>
            <div className="flex justify-center gap-10 border-2 border-pink-300 rounded-md p-2 pl-8 pr-8 mb-2">
                <div className="flex flex-col">
                    <label className="text-sm text-center"><b>Cava</b></label>
                    <label className="text-sm text-center">80cm</label>
                </div>
                <div className="flex flex-col items-center">
                    <label className="text-sm text-center"><b>Altura</b></label>
                    <label className="text-sm text-center">73cm</label>
                </div>
                <div className="flex flex-col">
                    <label className="text-sm text-center"><b>Cava</b></label>
                    <label className="text-sm text-center">90cm</label>
                </div>
                <div className="flex flex-col">
                    <label className="text-sm text-center"><b>Manga</b></label>
                    <label className="text-sm text-center">24cm</label>
                </div>
            </div>
            <section className="flex gap-3 mb-4 items-center justify-center">
                <button className="pl-4 pr-4 pt-1 pb-1 bg-pink-200 rounded-md" onClick={() => {
                    window.open("http://m.me/megaxlstore?text=Hello%20and%20Welcome")
                }}>Comprar</button>
            </section>
			<p className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
			<p className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
            <div className="pb-8"></div>
		</article>
	);
};
