import { OptimizedImage as Image } from "@/components/optimized-image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { QrCode } from "lucide-react"
import { imagePaths, imageDimensions } from "@/lib/image-config"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

interface LangPageProps {
    params: {
        lang: string        
    }
}

export default function LangPage({ params }: LangPageProps) {
    return (
        <div className="relative">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-24 pb-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left side - App Screenshots */}
                    <div className="relative">
                        <div className="relative w-[320px] h-[650px] mx-auto">
                            {/* Front Phone */}
                            <div className="absolute left-0 top-0 w-[320px]">
                                <Image
                                    src={imagePaths.screenshots.dealScreen}
                                    alt="961 Deals App Deal Screen"
                                    width={imageDimensions.screenshot.width}
                                    height={imageDimensions.screenshot.height}
                                    className="rounded-[40px] shadow-2xl"
                                    priority
                                />
                            </div>
                            {/* Back Phone */}
                            <div className="absolute left-32 top-20 w-[320px]">
                                <Image
                                    src={imagePaths.screenshots.mapScreen}
                                    alt="961 Deals App Map Screen"
                                    width={imageDimensions.screenshot.width}
                                    height={imageDimensions.screenshot.height}
                                    className="rounded-[40px] shadow-2xl"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right side - Content */}
                    <div className="text-center lg:text-left">
                        {/* User Count Banner */}
                        <div className="inline-flex items-center gap-2 bg-red-50 rounded-full px-4 py-2 mb-8">
                            <div className="flex -space-x-2">
                                {[
                                    imagePaths.avatars.user1,
                                    imagePaths.avatars.user2,
                                    imagePaths.avatars.user3,
                                ].map((src, i) => (
                                    <Image
                                        key={i}
                                        src={src}
                                        alt={`User ${i + 1}`}
                                        width={imageDimensions.avatar.width}
                                        height={imageDimensions.avatar.height}
                                        className="rounded-full border-2 border-white object-cover"
                                    />
                                ))}
                            </div>
                            <span className="text-sm">
                                Join over <span className="font-semibold">50,000</span> users
                            </span>
                        </div>

                        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
                            Discover Lebanon,
                            <br />
                            Save more.
                        </h1>

                        <p className="text-xl text-gray-600 mb-8 max-w-xl">
                            Explore new places and experiences in Lebanon - all while paying less with exclusive deals just for 961 members!
                        </p>

                        {/* App Store Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-4">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <button className="h-[40px] w-[120px]">
                                        <Image
                                            src="/images/app-store-badge.svg"
                                            alt="Download on the App Store"
                                            width={120}
                                            height={40}
                                            className="w-full h-full"
                                        />
                                    </button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Download 961</DialogTitle>
                                        <DialogDescription>
                                            Scan the QR code with your camera to download
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="flex flex-col items-center gap-6 p-6">
                                        <div className="relative">
                                            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 blur-xl animate-pulse rounded-full" />
                                            <QrCode className="w-48 h-48 relative bg-white p-4 rounded-2xl shadow-xl" />
                                        </div>
                                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">1</div>
                                            <span>Open Camera</span>
                                            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">2</div>
                                            <span>Scan Code</span>
                                            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">3</div>
                                            <span>Download</span>
                                        </div>
                                    </div>
                                </DialogContent>
                            </Dialog>

                            <Dialog>
                                <DialogTrigger asChild>
                                    <button className="h-[40px] w-[135px]">
                                        <Image
                                            src="/images/google-play-badge.png"
                                            alt="Get it on Google Play"
                                            width={135}
                                            height={40}
                                            className="w-full h-full"
                                        />
                                    </button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Download 961 Deals</DialogTitle>
                                        <DialogDescription>
                                            Open your camera and point it at the QR code to download
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="flex flex-col items-center gap-6 p-6">
                                        <div className="relative">
                                            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 blur-xl animate-pulse rounded-full" />
                                            <QrCode className="w-48 h-48 relative bg-white p-4 rounded-2xl shadow-xl" />
                                        </div>
                                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">1</div>
                                            <span>Open Camera</span>
                                            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">2</div>
                                            <span>Scan Code</span>
                                            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">3</div>
                                            <span>Download</span>
                                        </div>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </div>

                        {/* Join Now CTA */}
                        <div className="mt-8 space-y-4">
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Button className="w-full bg-[#FF0000] hover:bg-[#FF0000]/90 rounded-full text-lg font-bold py-6 shadow-[0_8px_30px_rgb(255,0,0,0.2)] hover:shadow-[0_8px_40px_rgb(255,0,0,0.3)] transition-all duration-300">
                                    Join Now
                                    <span className="ml-2">→</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features */}
                <div className="mx-auto max-w-7xl px-6 lg:px-8 py-32 mt-16">
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <div className="mb-6 flex justify-center">
                                <svg className="w-12 h-12 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 21V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 12H15M12 8H15M12 16H15M9 12H9.01M9 8H9.01M9 16H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-black mb-2">Explore Places</h3>
                            <p className="text-gray-600">How many new places have you tried recently? We'll show you the hottest spots.</p>
                        </div>

                        <div className="text-center">
                            <div className="mb-6 flex justify-center">
                                <svg className="w-12 h-12 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 11.5C21 16.75 12 22 12 22C12 22 3 16.75 3 11.5C3 6.25 7.02944 2 12 2C16.9706 2 21 6.25 21 11.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-black mb-2">Exclusive deals</h3>
                            <p className="text-gray-600">Our partners offer cool deals for you to try them out!</p>
                        </div>

                        <div className="text-center">
                            <div className="mb-6 flex justify-center">
                                <svg className="w-12 h-12 text-[#FF0000]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 2H7C5.89543 2 5 2.89543 5 4V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V4C19 2.89543 18.1046 2 17 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 18H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-black mb-2">Always at hand</h3>
                            <p className="text-gray-600">You always have all deals in your pocket. Check out which places new you invite you.</p>
                        </div>
                    </div>
                </div>

                {/* Reviews */}
                <div className="bg-gradient-to-br from-gray-900 to-black py-24 w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]">
                    <div className="mx-auto px-6 lg:px-8">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                                    <div className="flex gap-1 mb-4">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <svg key={star} className="w-4 h-4 text-[#FF0000]" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-white text-lg mb-6">"Got my money's worth from just one deal! 😍"</p>
                                    <div className="flex items-center gap-3">
                                        <p className="text-white font-semibold">Nour H.</p>
                                    </div>
                                </div>

                                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                                    <div className="flex gap-1 mb-4">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <svg key={star} className="w-4 h-4 text-[#FF0000]" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-white text-lg mb-6">"A7la app bi Lebnen! ❤️"</p>
                                    <div className="flex items-center gap-3">
                                        <p className="text-white font-semibold">Rami K.</p>
                                    </div>
                                </div>

                                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                                    <div className="flex gap-1 mb-4">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <svg key={star} className="w-4 h-4 text-[#FF0000]" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-white text-lg mb-6">"Perfect for discovering new restaurants. Already saved more than the membership cost!"</p>
                                    <div className="flex items-center gap-3">
                                        <p className="text-white font-semibold">Sarah M.</p>
                                    </div>
                                </div>

                                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                                    <div className="flex gap-1 mb-4">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <svg key={star} className="w-4 h-4 text-[#FF0000]" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-white text-lg mb-6">"Thanks for supporting local businesses 🇱🇧"</p>
                                    <div className="flex items-center gap-3">
                                        <p className="text-white font-semibold">Maya R.</p>
                                    </div>
                                </div>

                                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                                    <div className="flex gap-1 mb-4">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <svg key={star} className="w-4 h-4 text-[#FF0000]" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-white text-lg mb-6">"Discovering so many new spots 🔥"</p>
                                    <div className="flex items-center gap-3">
                                        <p className="text-white font-semibold">Karim S.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* How it works */}
                <div className="mx-auto max-w-7xl px-6 lg:px-8 py-32">
                    <div className="text-center mb-16">
                        <p className="text-[#FF0000] font-semibold mb-2">Easy as 1-2-3</p>
                        <h2 className="text-4xl font-black">How it works</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-16 items-start">
                        <div className="text-center">
                            <div className="relative mb-6">
                                <div className="bg-white rounded-3xl shadow-xl p-2 relative">
                                    <div className="absolute -left-4 -top-4 bg-[#FF0000] text-white font-bold rounded-full w-8 h-8 flex items-center justify-center z-10">1</div>
                                    <Image
                                        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=450&h=800"
                                        alt="Choose a restaurant"
                                        width={300}
                                        height={600}
                                        className="rounded-2xl object-cover aspect-[9/16]"
                                    />
                                </div>
                            </div>
                            <h3 className="text-2xl font-black mb-2">Choose a place</h3>
                            <p className="text-gray-600">Easily find places near you on the map or in list view.</p>
                        </div>

                        <div className="text-center">
                            <div className="relative mb-6">
                                <div className="bg-white rounded-3xl shadow-xl p-2 relative">
                                    <div className="absolute -left-4 -top-4 bg-[#FF0000] text-white font-bold rounded-full w-8 h-8 flex items-center justify-center z-10">2</div>
                                    <Image
                                        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=450&h=800"
                                        alt="Book a deal"
                                        width={300}
                                        height={600}
                                        className="rounded-2xl object-cover aspect-[9/16]"
                                    />
                                </div>
                            </div>
                            <h3 className="text-2xl font-black mb-2">Book a deal</h3>
                            <p className="text-gray-600">Book a time slot in which you want to redeem the offer.</p>
                        </div>

                        <div className="text-center">
                            <div className="relative mb-6">
                                <div className="bg-white rounded-3xl shadow-xl p-2 relative">
                                    <div className="absolute -left-4 -top-4 bg-[#FF0000] text-white font-bold rounded-full w-8 h-8 flex items-center justify-center z-10">3</div>
                                    <Image
                                        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=450&h=800"
                                        alt="Book a deal"
                                        width={300}
                                        height={600}
                                        className="rounded-2xl object-cover aspect-[9/16]"
                                    />
                                </div>
                            </div>
                            <h3 className="text-2xl font-black mb-2">Redeem the deal</h3>
                            <p className="text-gray-600">Show your booking at the place, have it validated, and enjoy!</p>
                        </div>
                    </div>
                </div>

                {/* Download CTA */}
                <div className="bg-black py-24 w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                            <h2 className="text-3xl font-black text-white">Get the app now</h2>
                            <div className="flex flex-col sm:flex-row items-center gap-6">
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <button className="h-[48px] w-[140px]">
                                            <Image
                                                src="/images/app-store-badge.svg"
                                                alt="Download on the App Store"
                                                width={140}
                                                height={48}
                                                className="w-full h-full"
                                            />
                                        </button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Download 961 Deals</DialogTitle>
                                            <DialogDescription>
                                                Scan the QR code with your camera to download
                                            </DialogDescription>
                                        </DialogHeader>
                                        <div className="flex flex-col items-center gap-6 p-6">
                                            <div className="relative">
                                                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 blur-xl animate-pulse rounded-full" />
                                                <QrCode className="w-48 h-48 relative bg-white p-4 rounded-2xl shadow-xl" />
                                            </div>
                                        </div>
                                    </DialogContent>
                                </Dialog>

                                <Dialog>
                                    <DialogTrigger asChild>
                                        <button className="h-[48px] w-[160px]">
                                            <Image
                                                src="/images/google-play-badge.png"
                                                alt="Get it on Google Play"
                                                width={160}
                                                height={48}
                                                className="w-full h-full"
                                            />
                                        </button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Download 961 Deals</DialogTitle>
                                            <DialogDescription>
                                                Scan the QR code with your camera to download
                                            </DialogDescription>
                                        </DialogHeader>
                                        <div className="flex flex-col items-center gap-6 p-6">
                                            <div className="relative">
                                                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 blur-xl animate-pulse rounded-full" />
                                                <QrCode className="w-48 h-48 relative bg-white p-4 rounded-2xl shadow-xl" />
                                            </div>
                                        </div>
                                    </DialogContent>
                                </Dialog>

                                <Button className="w-full bg-[#FF0000] hover:bg-[#FF0000]/90 rounded-full text-lg font-bold py-6">
                                    Join Now
                                    <span className="ml-2">→</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* What is 961 Deals */}
                <div className="mx-auto max-w-7xl px-6 lg:px-8 py-32">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black mb-4">What is 961 Deals?</h2>
                    </div>

                    <div className="aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            title="961 Deals Introduction"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>

                {/* Pricing Section */}
                <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 bg-red-50 rounded-3xl">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <h2 className="text-4xl font-black">It's worth it!</h2>
                            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2">
                                <div className="flex -space-x-2">
                                    {[
                                        imagePaths.avatars.user1,
                                        imagePaths.avatars.user2,
                                        imagePaths.avatars.user3,
                                    ].map((src, i) => (
                                        <Image
                                            key={i}
                                            src={src}
                                            alt={`User ${i + 1}`}
                                            width={imageDimensions.avatar.width}
                                            height={imageDimensions.avatar.height}
                                            className="rounded-full border-2 border-white object-cover"
                                        />
                                    ))}
                                </div>
                                <span className="text-sm">
                                    Join <span className="font-semibold">50,000+</span> users
                                </span>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <p className="text-xl text-gray-600">Become a member and get access to unlimited deals at Lebanon's favorite places!</p>
                            <p className="text-xl font-black text-gray-900">Cheaper than a shawarma! 🥙</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white p-10 rounded-2xl shadow-lg">
                            <h3 className="text-2xl font-bold mb-2">Monthly</h3>
                            <div className="flex items-baseline mb-4">
                                <span className="text-4xl font-black">$4.99</span>
                                <span className="text-gray-600 ml-2">/month</span>
                            </div>
                            <ul className="space-y-5 mb-10">
                                <li className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-[#FF0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Worth it after just 1 deal</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-[#FF0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Unlimited deals across Lebanon</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-[#FF0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Cancel anytime</span>
                                </li>
                            </ul>
                            <Button className="w-full bg-[#FF0000] hover:bg-[#FF0000]/90 rounded-full text-lg font-bold py-6">
                                Join Now
                                <span className="ml-2">→</span>
                            </Button>
                        </div>

                        <div className="bg-white p-10 rounded-2xl shadow-lg relative">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF0000] text-white px-4 py-1 rounded-full text-sm font-bold">
                                Popular
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Yearly</h3>
                            <div className="flex items-baseline mb-4">
                                <span className="text-4xl font-black">$4.17</span>
                                <span className="text-gray-600 ml-2">/month</span>
                                <span className="ml-2 text-sm text-[#FF0000] font-semibold">Save 17%</span>
                            </div>
                            <p className="text-sm text-gray-600 mb-4">Billed annually at $49.99/year</p>
                            <ul className="space-y-5 mb-10">
                                <li className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-[#FF0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Worth it from just a few uses</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-[#FF0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Unlimited deals across Lebanon</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-[#FF0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Lock in early low membership price</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-[#FF0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Cancel anytime</span>
                                </li>
                            </ul>
                            <Button className="w-full bg-[#FF0000] hover:bg-[#FF0000]/90 rounded-full text-lg font-bold py-6">
                                Join Now
                                <span className="ml-2">→</span>
                            </Button>
                        </div>
                    </div>

                    <div className="text-center mt-8 mb-8">
                        <p className="text-gray-600">
                            Have a company? Get memberships for as low as $2.49/employee.{' '}
                            <Link href="/companies" className="text-[#FF0000] hover:underline font-semibold">
                                Apply now!
                            </Link>
                        </p>
                    </div>

                    {/* Featured Testimonial */}
                    <div className="max-w-2xl mx-auto bg-white/50 rounded-2xl p-10 shadow-sm relative mt-16">
                        <div className="flex gap-1 mb-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <svg key={star} className="w-4 h-4 text-[#FF0000]" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <p className="text-base text-gray-700 mb-2">
                            "I've been using it for 2 weeks now and I'm discovering so many new places! Membership was worth it after redeeming my first deal!"
                        </p>
                        <div>
                            <span className="text-sm font-semibold text-gray-900">Jessica K.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}