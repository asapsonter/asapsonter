import { useState } from 'react'
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { HiOutlineLink, HiCheck, HiOutlineShare } from 'react-icons/hi'

export default function ShareBar({ title, url }: { title: string; url: string }) {
  const [copied, setCopied] = useState(false)
  const enc = encodeURIComponent
  const canNativeShare = typeof navigator !== 'undefined' && 'share' in navigator

  const targets = [
    { label: 'Share on X', icon: <FaXTwitter size={15} />, href: `https://twitter.com/intent/tweet?text=${enc(title)}&url=${enc(url)}` },
    { label: 'Share on LinkedIn', icon: <FaLinkedin size={15} />, href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}` },
    { label: 'Share on WhatsApp', icon: <FaWhatsapp size={15} />, href: `https://wa.me/?text=${enc(`${title} ${url}`)}` },
  ]

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.prompt('Copy this link:', url)
    }
  }

  const btn =
    'w-10 h-10 rounded-lg bg-vibranium-dim border border-vibranium/10 flex items-center justify-center text-text-secondary hover:text-vibranium-light hover:border-vibranium/30 transition-all duration-300'

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-[12px] text-text-muted font-mono tracking-[2px] uppercase mr-2">Share</span>
      {targets.map((t) => (
        <a key={t.label} href={t.href} target="_blank" rel="noopener noreferrer" aria-label={t.label} title={t.label} className={btn}>
          {t.icon}
        </a>
      ))}
      <button type="button" onClick={copy} aria-label="Copy link" title="Copy link" className={btn}>
        {copied ? <HiCheck size={16} className="text-naija-green" /> : <HiOutlineLink size={16} />}
      </button>
      {canNativeShare && (
        <button
          type="button"
          onClick={() => navigator.share({ title, url }).catch(() => {})}
          aria-label="More sharing options"
          title="More…"
          className={`${btn} md:hidden`}
        >
          <HiOutlineShare size={16} />
        </button>
      )}
      <span role="status" className="sr-only">{copied ? 'Link copied' : ''}</span>
    </div>
  )
}
