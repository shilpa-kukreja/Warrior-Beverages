"use client";

import { useState, useEffect } from "react";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Check,
  Ruler,
  Weight,
  Thermometer,
  Package,
  Heart,
  Share2,
  Star,
  Shield,
  Truck,
  Droplet,
} from "lucide-react";
import { FaWhatsapp, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { getProductById, getRelatedProducts } from "@/app/productdata/products";
import QuoteModal from "@/app/components/QuoteModal"; // your existing modal
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function ProductDetailPage() {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const id = params?.id;
    if (id) {
      const found = getProductById(id);
      if (found) {
        setProduct(found);
        setRelatedProducts(getRelatedProducts(id, 3));
      } else {
        notFound();
      }
    }
  }, [params?.id]);

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#304869]" />
        </div>
        <Footer />
      </>
    );
  }

  const images = [product.image, ...product.gallery].filter(Boolean);
  const whatsappMessage = `Hi, I'm interested in "${product.name} (${product.volume})". Could you please provide pricing and customization options?`;

  return (
    <>
      <Navbar />
      <main className="bg-white">
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-3 border-b">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-[#861981]">Home</Link>
              <span>/</span>
              <Link href="/products" className="hover:text-[#304869]">Products</Link>
              <span>/</span>
              <span className="text-gray-800 font-medium">{product.name}</span>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div>
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
                <Image
                  src={images[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
                {!product.inStock && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Out of Stock
                  </div>
                )}
              </div>
              {images.length > 1 && (
                <div className="mt-4 flex gap-3 overflow-x-auto">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                        selectedImage === idx ? "border-[#304869]" : "border-transparent opacity-70"
                      }`}
                    >
                      <Image src={img} alt={`Thumb ${idx + 1}`} fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{product.name}</h1>
              <div className="mt-2 flex items-center gap-3">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-500">(24 reviews)</span>
                <span className="text-sm text-green-600 font-medium">In Stock</span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-[#304869]/10 px-3 py-1 text-xs font-semibold text-[304869]">
                  {product.volume}
                </span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                  {product.material}
                </span>
              </div>
              <div className="mt-6 flex items-center gap-4">
                <span className="text-2xl font-bold text-gray-900">₹{product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                )}
              </div>  
              <p className="mt-6 text-gray-600 leading-relaxed">{product.description}</p>

              {/* Specifications */}
              {/* <div className="mt-8 border-t border-gray-100 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Specifications</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Ruler className="h-4 w-4 text-[#861981]" />
                    <span className="text-gray-600">{product.dimensions}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Weight className="h-4 w-4 text-[#861981]" />
                    <span className="text-gray-600">{product.weight}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Thermometer className="h-4 w-4 text-[#861981]" />
                    <span className="text-gray-600">{product.temperature}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Package className="h-4 w-4 text-[#861981]" />
                    <span className="text-gray-600">{product.material}</span>
                  </div>
                </div>
              </div> */}

              {/* Key Features */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check className="h-4 w-4 text-green-500 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="flex-1 rounded-lg bg-[#304869] px-6 py-3 font-semibold text-white transition hover:bg-[#304869] active:scale-95"
                >
                  Get Quote
                </button>
                <a
                  href={`https://wa.me/971526806400?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 font-semibold text-white transition hover:opacity-90 active:scale-95"
                >
                  <FaWhatsapp className="h-5 w-5" />
                  WhatsApp
                </a>
              </div>

              {/* Trust Badges */}
              <div className="mt-8 flex flex-wrap gap-6 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Shield className="h-5 w-5 text-[#304869]" />
                  <span>Trusted Purity</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Truck className="h-5 w-5 text-[#304869]" />
                  <span>Quality Controlled</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Droplet className="h-5 w-5 text-[#304869]" />
                  <span>Refreshingly Consistent</span>
                </div>
              </div>

              {/* Share & Like */}
              {/* <div className="mt-6 flex items-center gap-4">
                <button
                  onClick={() => setLiked(!liked)}
                  className={`flex items-center gap-1 text-sm transition ${liked ? "text-rose-500" : "text-gray-500"}`}
                >
                  <Heart className={`h-5 w-5 ${liked ? "fill-rose-500" : ""}`} />
                  {liked ? "Liked" : "Like"}
                </button>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Share:</span>
                  <a href="#" className="text-gray-400 hover:text-[#1877f2]">
                    <FaFacebookF className="h-4 w-4" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-sky-500">
                    <FaTwitter className="h-4 w-4" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-700">
                    <FaLinkedinIn className="h-4 w-4" />
                  </a>
                </div>
              </div> */}
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">You May Also Like</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map((related) => (
                  <Link
                    key={related.id}
                    href={`/products/${related.id}`}
                    className="group rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition-all hover:shadow-lg"
                  >
                    <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src={related.image}
                        alt={related.name}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-[#304869]">
                      {related.name}
                    </h3>
                    <p className="text-sm text-gray-500">{related.volume}</p>
                    <button className="mt-3 w-full rounded-md bg-gray-100 py-2 text-sm font-medium text-gray-700 transition group-hover:bg-[#304869] group-hover:text-white">
                      View Details
                    </button>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />

      {/* Your existing QuoteModal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        productName={product.name}
        productVolume={product.volume}
      />
    </>
  );
}