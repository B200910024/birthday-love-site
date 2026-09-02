'use client';

import { useState } from 'react';

const reasons = [
  ['01', 'Инээмсэглэл чинь', 'Миний хамгийн дуртай, хамгийн дулаахан дүр зураг.'],
  ['02', 'Дэргэд минь байдагт', 'Энгийн өдрүүдийг хүртэл онцгой болгодогт чинь.'],
  ['03', 'Яг өөрөөрөө байдагт', 'Чиний тэр хөөрхөн зан бүхэнд би хайртай.'],
];

const memories = [
  ['photo-1.jpg', 'Бидний эхлэл', 'Анхны дурсамж'],
  ['photo-2.jpg', 'Хамгийн гоё өдөр', 'Инээмсэглэл дүүрэн'],
  ['photo-3.jpg', 'Чиний дуртай мөч', 'Зөвхөн бид хоёр'],
  ['photo-4.jpg', 'Жижигхэн аз жаргал', 'Мартагдашгүй өдөр'],
  ['photo-5.jpg', 'Үргэлж хамтдаа', 'Дараагийн адал явдал'],
];

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <main>
      <div className="noise" />
      <div className="floaters" aria-hidden="true"><span>♡</span><span>✿</span><span>♡</span><span>✦</span><span>♡</span></div>
      <section className="hero">
        <nav><a className="logo" href="#top">for you <b>♥</b></a><span className="tiny-pill">хамгийн онцгой хүнд</span></nav>
        <div className="hero-copy" id="top">
          <p className="eyebrow">ӨНӨӨДӨР БОЛ ЧИНИЙ ӨДӨР</p>
          <h1>Баярын мэнд,<br/><em>миний хайр.</em></h1>
          <p className="intro">Чамтай учирсан минь миний амьдралын хамгийн хөөрхөн давхцал. Энэ жижигхэн булан зөвхөн чамд зориулагдсан шүү.</p>
          <a className="primary" href="#letter">Доошоо хамт аялъя <span>↓</span></a>
        </div>
        <div className="love-card" aria-label="Чамдаа хайртай гэсэн карт"><div className="tape"/><p>YOU ARE MY</p><div className="big-heart">♥</div><h2>favorite<br/>person</h2><span>always & forever</span></div>
        <div className="doodle arrow">↝</div><div className="doodle note">энэ бол чи :)</div>
      </section>
      <section className="reasons" id="reasons">
        <div className="section-head"><p className="eyebrow">ЧАМАЙГ ХАЙРЛАХ ШАЛТГААНУУДААС</p><h2>Тоолж барахгүй ч,<br/>эндээс эхэлье.</h2></div>
        <div className="reason-grid">{reasons.map(([number,title,copy])=><article key={number}><span>{number}</span><div className="mini-heart">♥</div><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>
      <section className="memories" id="memories">
        <div className="memories-heading">
          <div><p className="eyebrow">БИДНИЙ НАНДИН МӨЧҮҮД</p><h2>Зураг бүрийн цаана<br/><em>бидний түүх бий.</em></h2></div>
          <p className="memories-intro">Хамтдаа өнгөрүүлсэн мөч бүрээс тавхан ширхэгийг нь энд хадгаллаа. Цаашдаа энэ цуглуулга улам баяжина.</p>
        </div>
        <div className="photo-wall">
          {memories.map(([file,title,caption],index)=><figure className={`memory-card memory-${index+1}`} key={file}>
            <div className="photo-frame">
              <div className="photo-placeholder"><span>{String(index+1).padStart(2,'0')}</span><b>♡</b><small>Энд бидний зураг</small></div>
              <img src={`/photos/${file}`} alt={title} onError={(event)=>{event.currentTarget.style.display='none'}} />
            </div>
            <figcaption><strong>{title}</strong><span>{caption}</span></figcaption>
          </figure>)}
        </div>
        <div className="photo-note"><span>✦</span><p>Зураг нэмэхдээ <b>public/photos</b> хавтсанд <b>photo-1.jpg</b> — <b>photo-5.jpg</b> нэрээр хийгээрэй.</p></div>
      </section>
      <section className="letter-wrap" id="letter">
        <p className="letter-kicker">ЧАМД ИРСЭН НЭГЭН БЯЦХАН ЗАХИА</p>
        <div className={`envelope ${opened?'open':''}`} aria-live="polite">
          <div className="envelope-back" />
          <div className="envelope-flap" />
          <div className="letter"><p className="hand">Миний хайртдаа,</p><p>Өнөөдөр чиний инээмсэглэл жирийн өдрөөс арай удаан үргэлжлээсэй. Чиний хүссэн бүхэн биелж, зүрх чинь аз жаргалаар дүүрэн байгаасай.</p><p>Хажууд минь байж, намайг байгаагаар минь хайрладагт баярлалаа. Өнөөдрөөс эхлэх шинэ дурсамж бүрээ чамтайгаа бүтээхийг хүсэж байна.</p><p className="signature">Үргэлж чинийх ♥</p></div>
          <div className="envelope-front"><span className="seal">♥</span></div>
        </div>
        <div className="letter-actions">
          {!opened ? <button aria-expanded="false" onClick={()=>setOpened(true)}>Захиагаа нээх <span>💌</span></button> : <><p className="opened-note">Чамдаа маш их хайртай шүү ♡</p><button className="close-letter" aria-expanded="true" onClick={()=>setOpened(false)}>Захиагаа хаах <span>↓</span></button></>}
        </div>
      </section>
      <footer><p>Made with <span>♥</span> just for you</p><small>2026 · Бидний гоё дурсамжууд үргэлжилсээр...</small></footer>
    </main>
  );
}
