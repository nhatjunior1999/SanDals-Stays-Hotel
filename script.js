// Danh sách sản phẩm Trà & Cà phê
const products = [
    {
        name: "Bất Thụ Đông Phong / 불수동풍 / Bulsudongpung",
        price: "2.699.000 ₫ – 5.999.000 ₫ | 143.000 ₩ – 317.000 ₩",
        img: "https://doidepfmcg.com/wp-content/uploads/2024/04/bat-thu-dong-phong-tra-320g-anh-dai-dien-doi-dep.png",
        note: `불수동풍”은 고급 오룡차로, 은은한 향과 황금빛 차가 특징입니다. 고소하면서 약간 쓴맛이 어우러져 새로운 맛을 느낄 수 있습니다.<br><br>
           Bất Thụ Đông Phong” là Trà Oolong cao cấp, có hương khói nhẹ, nước vàng óng. Vị béo bùi và hơi đắng nhẹ, mang đến cảm giác mới lạ và ngon miệng.`
    },
    {
        name: "Hương Phù Ngõa Đỉnh / 향부와정 / Hyangbuwajeong",
        price: "2.699.000 ₫ | 143.000 ₩",
        img: "https://doidepfmcg.com/wp-content/uploads/2024/04/huong-phu-ngoa-dinh-tra-anh-dai-dien-doi-dep.png",
        note: `향부와정”은 꽃과 과일 향이 어우러진 고급 녹차로, 은은한 단맛과 부드러운 쓴맛이 조화를 이룹니다.<br><br>
           Hương Phù Ngõa Đỉnh” là Trà xanh cao cấp, hương hoa trái tươi mới, vị ngọt dịu xen chút đắng nhẹ.`
    },
    {
        name: "Tâm Thanh Mỹ Nhân / 심청미인 / Simcheongmiin",
        price: "2.699.000 ₫ | 143.000 ₩",
        img: "https://doidepfmcg.com/wp-content/uploads/2024/04/tam-thanh-my-nhan-tra-anh-dai-dien-doi-dep-1.png",
        note: `심청미인”은 특별한 홍차로, 붉고 황금빛의 아름다운 색을 띱니다. 잘 익은 과일 향과 은은한 훈향이 어우러져 신선하고 매혹적인 풍미를 선사합니다.<br><br>
           Tâm Thanh Mỹ Nhân” là Hồng Trà đặc biệt, nước đỏ vàng rực rỡ, hương trái cây chín và chút khói nhẹ, mang lại cảm giác tươi mới và cuốn hút.`
    },
    {
        name: "Bích Thuỷ Hoàn Nguyên / 벽수환원 / Byeoksuhwanwon",
        price: "2.699.000 ₫ | 143.000 ₩",
        img: "https://doidepfmcg.com/wp-content/uploads/2024/04/bich-thuy-hoan-nguyen-tra-anh-thu-vien-4-doi-dep-1.png",
        note: `벽수환원”은 강한 꽃향기와 자연의 풀향이 어우러진 고급 오룡차입니다. 은은한 단맛과 깔끔한 쓴맛이 특징입니다.<br><br>
           Bích Thuỷ Hoàn Nguyên” là Trà Oolong xanh cao cấp, hương hoa đậm hòa quyện cỏ cây tự nhiên, vị ngọt dịu xen chút đắng nhẹ.`
    },
    {
        name: "Phong Mật Trà / 풍밀차 / Pungmilcha",
        price: "1.899.000 ₫ | 101.000 ₩",
        img: "https://doidepfmcg.com/wp-content/uploads/2024/04/phong-mat-tra-160g-anh-thu-vien-2-doi-dep.png",
        note: `풍밀차”는 벌꿀과 사탕수수, 시가 향이 어우러진 오룡 홍차로, 달콤하고 깊은 맛이 특징입니다.<br><br>
           Phong Mật Trà” là Hồng Trà Oolong, hương mật ong – mật mía – xì gà, vị ngọt tròn đầy và dư vị ấm áp.`
    },
    {
        name: "Xuân Nhật Trà / 춘일차 / Chunilcha",
        price: "1.799.000 ₫ | 96.000 ₩",
        img: "https://doidepfmcg.com/wp-content/uploads/2024/04/xuan-nhat-tra-160g-anh-thu-vien-3-doi-dep.png",
        note: `춘일차”는 봄 하늘의 향기를 담은 오룡차로, 산뜻한 향과 부드러운 맛이 특징입니다.<br><br>
           Xuân Nhật Trà” là Trà Oolong, hương xuân tươi mát, vị tròn đầy và hậu vị dễ chịu.`
    },
    {
        name: "Hoàng Tỳ Nhật Minh / 황비일명 / Hwangbiilmyeong",
        price: "1.799.000 ₫ | 96.000 ₩",
        img: "https://doidepfmcg.com/wp-content/uploads/2024/04/hoang-ty-nhat-minh-tra-anh-thu-vien-3-doi-dep.png",
        note: `황비일명”은 계피, 훈향, 시가 향이 어우러진 오룡 흑차입니다. 붉은 갈색의 깊은 풍미와 건강에 좋은 GABA 성분이 특징입니다.<br><br>
           Hoàng Tỳ Nhật Minh” là Hắc Trà Oolong, hương gỗ quế – khói – xì gà, nước nâu đỏ đẹp mắt, giàu GABA giúp thư giãn và ngủ ngon.`
    },
    {
        name: "Ngọc Trác Trà / 옥착차 / Okchakcha",
        price: "1.799.000 ₫ | 96.000 ₩",
        img: "https://doidepfmcg.com/wp-content/uploads/2024/04/ngoc-trac-tra-160g-anh-thu-vien-3-doi-dep.png",
        note: `옥착차”는 황차 계열의 고급 오룡차로, 우유 향과 어우러진 달콤하고 진한 맛이 특징입니다.<br><br>
           Ngọc Trác Trà” là Hoàng Trà Oolong cao cấp, nước vàng óng, vị ngọt đậm đà cùng hương sữa quyến rũ.`
    },
    {
        name: "Ngũ Vị Trà / 오미차 세트 / Omicha Set",
        price: "2.499.000 ₫ | 134.000 ₩",
        img: "https://doidepfmcg.com/wp-content/uploads/2024/04/ngu-vi-tra-200g-anh-thu-vien-6-doi-dep-1.png",
        note: `오미차 세트”는 다섯 가지 고급 차를 모은 특별한 세트입니다. 다양한 향과 맛을 한 번에 즐길 수 있으며 선물용으로도 이상적입니다.<br><br>
           Ngũ Vị Trà” là set 5 loại Trà thượng hạng, hương vị đa dạng và tinh tế, rất thích hợp làm quà tặng hoặc thưởng thức trong dịp đặc biệt.`
    },
    {
        name: "Cà phê Giả Gỗ / 가고 커피 / Gago Coffee",
        price: "143.000 ₫ – 286.000 ₫ | 8.000 ₩ – 15.000 ₩",
        img: "https://doidepfmcg.com/wp-content/uploads/2023/03/ca-phe-gia-go-250g-anh-thu-vien-3-doi-dep.png",
        note: `가고 커피”는 고급 로부스타로 만든 커피로, 카라멜, 초콜릿, 아몬드, 은은한 스모키 향이 어우러집니다.<br><br>
           Cà phê Giả Gỗ” là Robusta Bảo Lộc cao cấp, vị đắng đậm, hương caramel, chocolate, hạnh nhân và thoảng khói đặc trưng.`
    },
    {
        name: "Cà phê Phin / 카페 핀 / Cafe Phin",
        price: "100.000 ₫ – 202.000 ₫ | 5.400 ₩ – 10.800 ₩",
        img: "https://doidepfmcg.com/wp-content/uploads/2023/03/ca-phe-phin-doi-dep-250g-anh-thu-vien-2-doi-dep-1.png",
        note: `카페 핀”은 고급 로부스타로 만든 진하고 쌉쌀한 맛의 커피입니다.<br><br>
           Cà phê Phin” là Robusta Bảo Lộc cao cấp, vị đắng đậm, hương caramel, chocolate, hạnh nhân và thoảng khói đặc trưng.`
    }
];

// Render sản phẩm ra HTML
window.onload = function() {
    const grid = document.getElementById("productGrid");

    products.forEach(p => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
      <div class="product-image">
        <img src="${p.img}" alt="${p.name}">
      </div>
      <div class="product-info">
        <h3 class="product-name">${p.name}</h3>
        <div class="product-price">${p.price}</div>
        <p class="product-description">${p.note}</p>
      </div>
    `;
        grid.appendChild(card);
    });

    // Nút scroll to top
    const scrollBtn = document.getElementById("scrollToTop");
    window.addEventListener("scroll", () => {
        scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });
    scrollBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
};
grid.appendChild(card);

// Thêm hiệu ứng trễ nhỏ để nhìn mượt
setTimeout(() => {
    card.classList.add("show");
}, 100);
