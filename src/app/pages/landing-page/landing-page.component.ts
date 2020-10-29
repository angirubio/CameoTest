import { Component, OnInit, Inject, ViewChild, ElementRef  } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DOCUMENT } from '@angular/common';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  @ViewChild('thirthSection', {static: true}) thirthSection: ElementRef<HTMLDivElement>;
  @ViewChild('secondSection', {static: true}) secondSection: ElementRef<HTMLDivElement>;
  @ViewChild('menu', {static: true}) menu: ElementRef<HTMLDivElement>;
  @ViewChild('menuSecond', {static: true}) menuSecond: ElementRef<HTMLDivElement>;
  @ViewChild('imageFirst', {static: true}) imageFirst: ElementRef<HTMLDivElement>;
  @ViewChild('imageSecond', {static: true}) imageSecond: ElementRef<HTMLDivElement>;
  @ViewChild('imageAngi', {static: true}) imageAngi: ElementRef<HTMLDivElement>;
  @ViewChild('imageDesi', {static: true}) imageDesi: ElementRef<HTMLDivElement>;
  @ViewChild('imagePipe', {static: true}) imagePipe: ElementRef<HTMLDivElement>;

  

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.initialAnimations();
    this.initScrollAnimations();

    // LIMPIANDO LA INFO DEL USUARIO DEL LOCALSTORAGE
    localStorage.removeItem('usuario');
    localStorage.clear();
  }
  initScrollAnimations(): void{
    gsap.to(this.imageFirst.nativeElement, {
      scrollTrigger: {
        trigger: this.imageFirst.nativeElement,
        scrub: true,
        start: '110% center',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      duration: 1.1,
      scale: 1.2, 
      height: 250,
    });
    gsap.to(this.imageSecond.nativeElement, {
      scrollTrigger: {
        trigger: this.imageSecond.nativeElement,
        scrub: true,
        start: '80% center'
      },
      duration: 1.1,
      scale: 1.2,
      height: 380,
    });
    gsap.to(this.imageAngi.nativeElement, {
      scrollTrigger: {
        trigger: this.imageAngi.nativeElement,
        scrub: true,
        start: '80% center'
      },
      duration: 1.1,
      scale: 1.2,
      height: 380,
    });
    gsap.to(this.imageDesi.nativeElement, {
      scrollTrigger: {
        trigger: this.imageDesi.nativeElement,
        scrub: true,
        start: '80% center'
      },
      duration: 1.1,
      scale: 1.2,
      height: 380,
    });
    gsap.to(this.imagePipe.nativeElement, {
      scrollTrigger: {
        trigger: this.imagePipe.nativeElement,
        scrub: true,
        start: '80% center'
      },
      duration: 1.1,
      scale: 1.2,
      height: 380,
    });
    gsap.to(this.document.querySelector('.heading-1'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.heading-1'),
        scrub: true,
        start: '150% center',
      },
      color: '#fff',
      duration: 1.5,
    });
    gsap.to(this.document.querySelector('.paragraph'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.paragraph'),
        scrub: true,
        start: '150% center',
      },
      color: '#fff',
      duration: 1.5
    });
    gsap.to(this.document.querySelector('.btn'), {
      scrollTrigger: {
        trigger: this.document.querySelector('btn'),
        scrub: true,
        start: '150% center',
      },
      color: '#fff',
      duration: 1.5
    });
    gsap.from(this.document.querySelector('#buy'), {
      scrollTrigger: {
        trigger: this.document.querySelector('#buy'),
        scrub: true,
        toggleClass: 'active',
        start: 'top center',
      },
      duration: 1.5,
      y: 40,
      opacity: 0,
    });
    gsap.from(this.document.querySelector('#about'), {
      scrollTrigger: {
        trigger: this.document.querySelector('#about'),
        scrub: true,
        toggleClass: 'active',
        start: 'top center',
      },
      duration: 1.5,
      y: 40,
      opacity: 0,
    });
    gsap.from(this.document.querySelector('#control'), {
      scrollTrigger: {
        trigger: this.document.querySelector('#control'),
        scrub: true,
        toggleClass: 'active',
        start: 'top center',
      },
      duration: 1.5,
      y: 40,
      opacity: 0,
    });
    gsap.from(this.document.querySelector('#nosotros'), {
      scrollTrigger: {
        trigger: this.document.querySelector('#nosotros'),
        scrub: true,
        toggleClass: 'active',
        start: 'top center',
      },
      duration: 1.5,
      y: 40,
      opacity: 0,
    });
    gsap.from(this.document.querySelector('.box'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.box'),
        scrub: true,
        toggleClass: 'active',
        start: '-10% center',
      },
      duration: 1.5,
      width: 0,
      opacity: 0,
    });
    gsap.from(this.document.querySelector('.box1'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.box1'),
        scrub: true,
        toggleClass: 'active',
        start: '-10% center',
      },
      duration: 1.5,
      width: 0,
      opacity: 0,
    });
    gsap.from(this.document.querySelector('.info-1__visual img'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.info-1__visual img'),
        scrub: true,
        toggleClass: 'active',
        start: '-60% bottom',
      },
      duration: 1.5,
      width: 0,
      opacity: 0,
    });
    gsap.from(this.document.querySelector('.info-4__visual img'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.info-4__visual img'),
        scrub: true,
        toggleClass: 'active',
        start: '-60% bottom',
      },
      duration: 1.5,
      width: 0,
      opacity: 0,
    });
    gsap.from(this.document.querySelector('.info-2__visual img'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.info-2__visual img'),
        scrub: true,
        toggleClass: 'active',
        start: '-60% bottom',
      },
      duration: 1.5,
      width: 0,
      opacity: 0,
    });
    gsap.from(this.document.querySelector('.info-3__visual img'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.info-3__visual img'),
        scrub: true,
        toggleClass: 'active',
        start: '-60% bottom',
      },
      duration: 1.5,
      width: 0,
      opacity: 0,
    });
    gsap.from(this.document.querySelector('.quote'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.quote'),
        scrub: true,
        toggleClass: 'active',
        start: '-60% bottom',
      },
      duration: 1.5,
      opacity: 0,
    });
    gsap.from(this.document.querySelector('.info-1__visual .heading-3'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.info-1__visual .heading-3'),
        scrub: true,
        toggleClass: 'active',
        start: '-60% bottom',
      },
      duration: 1.5,
      y: 40,
      opacity: 0,
    });
    gsap.from(this.document.querySelector('.info-1__visual .btn--learn'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.info-1__visual .btn--learn'),
        scrub: true,
        toggleClass: 'active',
        start: '-60% bottom',
      },
      duration: 1.5,
      y: 40,
      opacity: 0,
    });
  }

  initialAnimations(): void{
    gsap.from(this.menu.nativeElement.childNodes, {
      duration: 0.5,
      opacity: 0,
      y: -20,
      stagger: 0.2,
      delay: 0.5,
    });
    gsap.from(this.menuSecond.nativeElement.childNodes, {
      duration: 0.5,
      opacity: 0,
      y: -20,
      stagger: 0.2,
      delay: 0.8,
    });
    gsap.from(this.imageFirst.nativeElement.childNodes, {
      duration: 0.7,
      opacity: 0,
      y: -30,
      stagger: 0.2,
      delay: 0.5,
    });
    gsap.from(this.imageSecond.nativeElement.childNodes, {
      duration: 0.7,
      opacity: 0,
      y: -30,
      stagger: 0.2,
      delay: 0.6,
    });
    gsap.from(this.imageAngi.nativeElement.childNodes, {
      duration: 0.7,
      opacity: 0,
      y: -30,
      stagger: 0.2,
      delay: 0.6,
    });
    gsap.from(this.document.querySelector('.heading-1'), {
      duration: 0.7,
      opacity: 0,
      y: -30,
      stagger: 0.2,
      delay: 0.6,
    });
    gsap.from(this.document.querySelector('.paragraph'), {
      duration: 0.7,
      opacity: 0,
      y: -30,
      stagger: 0.2,
      delay: 0.7,
    });
    gsap.from(this.document.querySelector('.btn'), {
      duration: 0.7,
      opacity: 0,
      y: -30,
      stagger: 0.2,
      delay: 0.8,
    });
  }
}
