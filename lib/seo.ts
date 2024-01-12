import { NextSeoProps } from 'next-seo';
import { config } from '@/config/config';
import { Metadata } from 'next';
import React from 'react';

interface SEO {
  title: string;
  canonicalUrlRelative: string;
}

export const getSEOTags = ({ title, canonicalUrlRelative }: SEO): Metadata => {
  return {
    title,
    description: config.app_settings.app_description,
    alternates: {
      canonical: `${config.app_settings.domain_name}${canonicalUrlRelative}`,
    },
    openGraph: {
      type: 'website',
      url: `${config.app_settings.domain_name}${canonicalUrlRelative}`,
      title,
      description: config.app_settings.app_description,
      images: `${config.app_settings.domain_name}/shareImage.png`,
    },
    keywords: [
      'CodeAssist',
      'NextJS boilerplate',
      'NextJS starter',
      'NextJS template',
      'NextJS',
      'ReactJS',
    ],
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@err0rz1',
    },
    manifest: 'https://nextjs.org/manifest.json',
  };
};
