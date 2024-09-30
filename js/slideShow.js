// タレント情報のリスト
// DOMが読み込まれたときに実行

import { talents } from './talents_info.js';

document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.talent-container'); // タレントを表示する親要素

    talents.forEach(talent => {
    	// タレントのHTML要素を作成
    	const talentDiv = document.createElement('div');
    	talentDiv.classList.add('talent');
    	talentDiv.style.backgroundImage = `url('${talent.image}')`;

    	// 名前と職業
    	const nameDiv = document.createElement('div');
    	nameDiv.classList.add('name');
    	nameDiv.innerHTML = `<div class="details">${talent.name} - ${talent.title}</div>`;

    	// ソーシャルアイコンのコンテナを作成
    	const socialIconsDiv = document.createElement('div');
    	socialIconsDiv.classList.add('socialIcons');

    	// TikTokリンクがある場合
    	if (talent.tiktok) {
    	    socialIconsDiv.innerHTML += `<a href="${talent.tiktok}" target="_blank"><img src="IconImage/tiktokIcon.png" alt="TikTok"></a>`;
    	}

    	// Instagramリンクがある場合
    	if (talent.instagram) {
    	    socialIconsDiv.innerHTML += `<a href="${talent.instagram}" target="_blank"><img src="IconImage/Instagram.png" alt="Instagram"></a>`;
    	}

    	// X (Twitter) リンクがある場合
    	if (talent.x) {
    	    socialIconsDiv.innerHTML += `<a href="${talent.x}" target="_blank"><img src="IconImage/X.jpg" alt="X (Twitter)"></a>`;
    	}

    	// 作成した要素を組み合わせてcontainerに追加
    	talentDiv.appendChild(nameDiv);
    	talentDiv.appendChild(socialIconsDiv);
    	container.appendChild(talentDiv);
	});
	
	const talentsBox = document.querySelectorAll('.talent'); // すべてのタレント要素を取得

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show'); // 表示される要素に 'show' クラスを追加
                observer.unobserve(entry.target); // 一度表示されたら監視を停止
            }
        });
    });

    talentsBox.forEach(talent => {
        if (talent) {  // talentがundefinedでないことを確認
            observer.observe(talent); // 各タレント要素を監視
        } else {
            console.error("Undefined talent element found."); // undefinedの要素が見つかった場合
        }
    });

});

// ヘッダーを取得
const header = document.querySelector('.header');

// 前回のスクロール位置を記録
let lastScrollTop = 0;


window.addEventListener('scroll', function() {
	// 現在のスクロール位置を取得
	let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // 下にスクロールした場合、ヘッダーを隠す
	if (scrollTop > lastScrollTop) {
	    header.style.top = '-100px';  // ヘッダーの高さ分隠す（必要に応じて調整）
    } else {
    	// 上にスクロールした場合、ヘッダーを表示
   		header.style.top = '0';
    }
    // スクロール位置を更新
    lastScrollTop = scrollTop;
});
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('.nav');

// ハンバーガーメニューをクリックした時にナビゲーションメニューを表示・非表示
hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

