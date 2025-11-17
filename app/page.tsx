'use client';

import { useState } from 'react';
import InfiniteGallery from '@/components/InfiniteGallery';

export default function Home() {
	const sampleImages = [
		{ src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5186-S64Rzxh96IZO05AxCA5Ez6PGEsTH8m.jpg', alt: 'Ivy running excited' },
		{ src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5180-cWKQImN4LYOySuUg5XPEWIzK6hOpHE.jpg', alt: 'Ivy sitting' },
		{ src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5192-uiqv4xG4IdRiDe59fOupb0lYlasf4d.jpg', alt: 'Ivy jumping' },
		{ src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5191-m4Cjgf5rXNrz8h88Xr6EGvPrTQsWug.jpg', alt: 'Ivy playing' },
		{ src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5181-DsVPV9G7N2jFN4Ot5oDQPSWfhQ0m5W.jpg', alt: 'Ivy stretching' },
		{ src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5177-mZq2YqloqJ6hmdwhx1RtImufkD5D1R.jpg', alt: 'Ivy with signature grin' },
		{ src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5184-NRLY2VQCUpRdIFbWgxavkqMipACeni.jpg', alt: 'Ivy with friend' },
	];

	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText('soon');
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<main className="min-h-screen ">
			<div className="text-center fixed top-10 left-0 right-0 font-mono uppercase text-[11px] font-semibold z-10">
				<div className="flex items-center justify-center gap-4">
					<a href="https://x.com/i/communities/1990059465366732921" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition">
						X.com
					</a>
					<a href="https://www.tiktok.com/@ivyvibing" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition">
						TikTok
					</a>
					<button
						onClick={handleCopy}
						className="px-3 py-1 border border-white rounded hover:bg-white hover:text-black transition"
					>
						{copied ? 'Copied!' : 'CA: soon'}
					</button>
				</div>
			</div>

			<InfiniteGallery
				images={sampleImages}
				speed={1.2}
				zSpacing={3}
				visibleCount={12}
				falloff={{ near: 0.8, far: 14 }}
				className="h-screen w-full rounded-lg overflow-hidden"
			/>
			<div className="h-screen inset-0 pointer-events-none fixed flex items-center justify-center text-center px-3 mix-blend-exclusion text-white">
				<h1 className="font-sans text-4xl md:text-7xl tracking-tight">
					Meet <span className="italic text-pink-500 mix-blend-normal">$Ivy</span> —<br />
					TikTok's Famous Frog Dog
				</h1>
			</div>

			<div className="text-center fixed bottom-10 left-0 right-0 font-mono uppercase text-[11px] font-semibold">
				<p>Use mouse wheel, arrow keys, or touch to navigate</p>
				<p className=" opacity-60">
					Auto-play resumes after 3 seconds of inactivity
				</p>
				<p className="mt-4 opacity-50 text-[8px]">
					This is a fan-run website and not affiliated with the official TikTok profile.
					By engaging with $ivy, a meme token on Pump.funs Solana platform, you agree to this Disclaimer. $ivy is for entertainment purposes only and has no utility or guaranteed value. It is highly speculative and extremely volatile.
 					The $ivy family receives 0.05% to 0.95% per trade on PumpSwap.
					This is not financial or legal advice. Always consult qualified professionals before making decisions. The Creator and the family are not advisors and are not liable for any losses.
					Verify all details directly at pump.fun or x.com.If you do not fully understand the risks, please do not engage.Proceed with caution.
				</p>
			</div>
		</main>
	);
}
