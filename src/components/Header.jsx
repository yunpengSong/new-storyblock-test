'use client';

import Link from 'next/link';
import Image from 'next/image';
import { storyblokEditable } from "@storyblok/react/rsc";

export default function Header({ blok }) {
    
  return (
    <nav {...storyblokEditable(blok)} className="navbar navbar-expand-lg bg-body-tertiary pt-3 pb-3">
      <div className="container">
        <Link href='/' >
          <Image
            src={blok.logoImg}
            alt="Logo"
            width={150}
            height={32}
          />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-lg-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
