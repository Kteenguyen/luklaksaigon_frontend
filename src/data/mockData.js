// Mock Data for Luklak Saigon

// Re-using the available imported images by paths since this is a data file
// In Next.js, we can also use absolute paths from public if they are in public folder
// But since they are in src/assets, we will export paths or we just rely on static imports in the data file.
// It's better to import them here so webpack processes them.

import img1 from '../assets/projectImage/Dự án thực tế/KC Villa/z7450163862634_83a0f94c7430897270c93b1b0a7bcfd6.jpg';
import img2 from '../assets/projectImage/Dự án thực tế/KC Villa/z7450163989369_be1b80a76e84bb7dc5b88bc685725aee.jpg';
import img3 from '../assets/projectImage/Dự án thực tế/KC Villa/z7450164007724_768e2f7d26c3ae5ab581260ed9f2a55b.jpg';
import img4 from '../assets/projectImage/Dự án thực tế/KC Villa/z7450164022320_7c5e9ff572be475288651b3a0f1be4a3.jpg';

// Helper to convert title to slug
export const generateSlug = (text) => {
  return text.toString().toLowerCase()
    .replace(/đ/g, 'd')
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // remove accents
    .replace(/\s+/g, '-') // replace spaces with -
    .replace(/[^\w\-]+/g, '') // remove non-word chars
    .replace(/\-\-+/g, '-') // replace multiple - with single -
    .replace(/^-+/, '') // trim - from start
    .replace(/-+$/, ''); // trim - from end
}

export const projectsData = [
  {
    id: 1,
    title: 'Biệt thự KC Villa',
    slug: 'biet-thu-kc-villa',
    category: 'Villa',
    location: 'Đồng Nai',
    area: '450m2',
    style: 'Modern Luxury',
    year: '2023',
    overview: 'Nằm tại vùng ngoại ô yên bình, KC Villa là bản hòa ca giữa kiến trúc hiện đại và thiên nhiên nguyên bản. Với thiết kế mở, tối đa hóa ánh sáng tự nhiên và sử dụng vật liệu cao cấp, công trình mang lại không gian sống đẳng cấp nhưng vẫn giữ được sự ấm áp, mộc mạc.',
    coverImg: img1,
    images: [img1, img2, img3, img4, img1]
  },
  {
    id: 2,
    title: 'The Landmark Apartment',
    slug: 'the-landmark-apartment',
    category: 'Căn hộ',
    location: 'Q.1, TP.HCM',
    area: '120m2',
    style: 'Wabi-sabi',
    year: '2024',
    overview: 'Dự án cải tạo căn hộ cao cấp tại trung tâm thành phố. Thách thức lớn nhất là biến một không gian thô cứng thành chốn nương náu yên bình giữa lòng đô thị nhộn nhịp, áp dụng triết lý Wabi-sabi với vật liệu thô mộc và đường nét tự nhiên.',
    coverImg: img2,
    images: [img2, img3, img4, img1, img2]
  },
  {
    id: 3,
    title: 'Sunrise Townhouse',
    slug: 'sunrise-townhouse',
    category: 'Nhà phố',
    location: 'Q.7, TP.HCM',
    area: '200m2',
    style: 'Japandi',
    year: '2023',
    overview: 'Nhà phố điển hình với giải pháp lấy sáng đột phá bằng hệ thống giếng trời kết nối các tầng. Thiết kế Japandi tinh tế giúp không gian sống luôn tràn ngập sức sống và sự tĩnh lặng.',
    coverImg: img3,
    images: [img3, img4, img1, img2, img3]
  },
  {
    id: 4,
    title: 'Zen Cafe Boutique',
    slug: 'zen-cafe-boutique',
    category: 'Công trình dịch vụ',
    location: 'Q.2, TP.HCM',
    area: '300m2',
    style: 'Mid-Century',
    year: '2024',
    overview: 'Dự án F&B với yêu cầu tạo ra một không gian hoài cổ, sang trọng nhưng vẫn phải thân thiện với giới trẻ. Chúng tôi sử dụng nội thất mang tính biểu tượng của thập niên 50 kết hợp bảng màu rực rỡ.',
    coverImg: img4,
    images: [img4, img1, img2, img3, img4]
  },
  {
    id: 5,
    title: 'Cloud Penthouse',
    slug: 'cloud-penthouse',
    category: 'Căn hộ',
    location: 'Q.2, TP.HCM',
    area: '250m2',
    style: 'Japandi',
    year: '2024',
    overview: 'Căn Penthouse tràn ngập ánh sáng tự nhiên với triết lý thiết kế Japandi. Không gian tĩnh tại giữa lưng chừng trời.',
    coverImg: img1,
    images: [img1, img2, img3]
  },
  {
    id: 6,
    title: 'The Raw Studio',
    slug: 'the-raw-studio',
    category: 'Building',
    location: 'Q.3, TP.HCM',
    area: '180m2',
    style: 'Wabi-sabi',
    year: '2023',
    overview: 'Văn phòng sáng tạo với những bức tường bê tông mài thô mộc, giữ lại vẻ đẹp nguyên sơ của vật liệu theo tinh thần Wabi-sabi.',
    coverImg: img2,
    images: [img2, img3, img4]
  },
  {
    id: 7,
    title: 'Retro Villa',
    slug: 'retro-villa',
    category: 'Villa',
    location: 'Bình Dương',
    area: '500m2',
    style: 'Mid-Century',
    year: '2024',
    overview: 'Biệt thự nghỉ dưỡng mang đậm dấu ấn thập niên 60 với các mảng màu rực rỡ và đồ nội thất gỗ óc chó đặc trưng.',
    coverImg: img3,
    images: [img3, img4, img1]
  },
  {
    id: 8,
    title: 'Skyline Duplex',
    slug: 'skyline-duplex',
    category: 'Căn hộ',
    location: 'Bình Thạnh, TP.HCM',
    area: '150m2',
    style: 'Modern',
    year: '2023',
    overview: 'Căn Duplex hiện đại sang trọng với tầm nhìn ôm trọn thành phố. Không gian mở tối đa cùng vật liệu kính và kim loại.',
    coverImg: img4,
    images: [img4, img1, img2]
  },
  {
    id: 9,
    title: 'Pine Hill Retreat',
    slug: 'pine-hill-retreat',
    category: 'Công trình cảnh quan',
    location: 'Đà Lạt',
    area: '800m2',
    style: 'Farmhouse',
    year: '2024',
    overview: 'Khu nghỉ dưỡng ẩn mình giữa rừng thông với kiến trúc Farmhouse đặc trưng: mái ngói dốc, gỗ ốp mộc mạc và chiếc lò sưởi ấm cúng.',
    coverImg: img1,
    images: [img1, img2, img3]
  },
  {
    id: 10,
    title: 'Countryside Cottage',
    slug: 'countryside-cottage',
    category: 'Nhà phố',
    location: 'Bảo Lộc',
    area: '120m2',
    style: 'Farmhouse',
    year: '2023',
    overview: 'Ngôi nhà nhỏ mang hơi thở đồng quê nhẹ nhàng, là chốn trở về bình yên sau những ngày dài mệt mỏi.',
    coverImg: img2,
    images: [img2, img3, img4]
  }
];

export const constructionProjectsData = [
  {
    id: 'c1',
    title: 'The Landmark - Thô',
    slug: 'the-landmark-tho',
    status: 'Đang thi công',
    location: 'Q.1, TP.HCM',
    coverImg: img1,
    overview: 'Giai đoạn thi công phần thô, xử lý kết cấu dầm sàn và đi đường ống MEP âm tường.',
    materials: ['Bê tông mác 300', 'Thép Việt Nhật', 'Ống nhựa Bình Minh'],
    timeline: '3 tháng',
    gallery: [img1, img2, img3]
  },
  {
    id: 'c2',
    title: 'Ocean Villa - Cất nóc',
    slug: 'ocean-villa-cat-noc',
    status: 'Đang thi công',
    location: 'Đà Nẵng',
    coverImg: img2,
    overview: 'Công trình đã hoàn thành đổ bê tông sàn tầng mái, chuẩn bị bước vào giai đoạn xây tô hoàn thiện.',
    materials: ['Bê tông thương phẩm', 'Gạch Tuynel'],
    timeline: '4 tháng',
    gallery: [img2, img3, img4]
  },
  {
    id: 'c3',
    title: 'KC Villa - Hoàn thiện',
    slug: 'kc-villa-hoan-thien',
    status: 'Đã hoàn thiện',
    location: 'Đồng Nai',
    coverImg: img3,
    overview: 'Giai đoạn lắp đặt nội thất đồ gỗ, vệ sinh công nghiệp và chuẩn bị bàn giao cho gia chủ.',
    materials: ['Gỗ Óc chó tự nhiên', 'Đá Marble Ý', 'Thiết bị Toto'],
    timeline: '1 tháng',
    gallery: [img3, img4, img1]
  },
  {
    id: 'c4',
    title: 'Zen Cafe - Bàn giao',
    slug: 'zen-cafe-ban-giao',
    status: 'Đã hoàn thiện',
    location: 'Q.2, TP.HCM',
    coverImg: img1,
    overview: 'Dự án đã chính thức đi vào hoạt động, đảm bảo mọi tiêu chuẩn khắt khe về PCCC và an toàn kết cấu.',
    materials: ['Gạch Terrazzo', 'Sắt sơn tĩnh điện', 'Kính cường lực'],
    timeline: '1 tuần',
    gallery: [img1, img2, img3]
  },
  {
    id: 'c5',
    title: 'Cloud Penthouse - Thô',
    slug: 'cloud-penthouse-tho',
    status: 'Đang thi công',
    location: 'Q.2, TP.HCM',
    coverImg: img2,
    overview: 'Đang tiến hành đập phá tường ngăn cũ, xây lại layout mới theo thiết kế không gian mở. Công đoạn chống thấm đang được thực hiện kỹ lưỡng.',
    materials: ['Sơn chống thấm', 'Xi măng Insee', 'Gạch không nung'],
    timeline: '2 tháng',
    gallery: [img2, img3, img4]
  },
  {
    id: 'c6',
    title: 'Sunrise Townhouse - Hoàn thiện',
    slug: 'sunrise-townhouse-hoan-thien',
    status: 'Đang thi công',
    location: 'Q.7, TP.HCM',
    coverImg: img3,
    overview: 'Đang trong quá trình bả matit và lăn sơn nước. Hệ thống trần thạch cao giật cấp đã hoàn thiện 100%.',
    materials: ['Sơn Dulux', 'Thạch cao Vĩnh Tường'],
    timeline: '3 tuần',
    gallery: [img3, img4, img1]
  },
  {
    id: 'c7',
    title: 'Pine Hill Retreat - Móng',
    slug: 'pine-hill-retreat-mong',
    status: 'Đang thi công',
    location: 'Đà Lạt',
    coverImg: img4,
    overview: 'Hoàn thành công tác đào móng và đổ bê tông lót. Địa hình dốc đòi hỏi kỹ thuật xử lý nền móng đặc biệt.',
    materials: ['Cọc nhồi bê tông', 'Thép Pomina'],
    timeline: '1 tháng',
    gallery: [img4, img1, img2]
  },
  {
    id: 'c8',
    title: 'The Raw Studio - Lắp đặt',
    slug: 'the-raw-studio-lap-dat',
    status: 'Đang thi công',
    location: 'Q.3, TP.HCM',
    coverImg: img1,
    overview: 'Đội ngũ mộc đang tiến hành lắp đặt hệ thống tủ kệ âm tường. Bề mặt tường bê tông thô đã được phủ lớp bảo vệ.',
    materials: ['Gỗ công nghiệp An Cường', 'Phụ kiện Hafele'],
    timeline: '2 tuần',
    gallery: [img1, img2, img3]
  },
  {
    id: 'c9',
    title: 'Retro Villa - Bàn giao',
    slug: 'retro-villa-ban-giao',
    status: 'Đã hoàn thiện',
    location: 'Bình Dương',
    coverImg: img2,
    overview: 'Toàn bộ nội thất và cảnh quan sân vườn đã hoàn tất. Công trình đã được vệ sinh công nghiệp và bàn giao cho khách hàng.',
    materials: ['Sàn gỗ tự nhiên', 'Đá ốp lát cao cấp'],
    timeline: 'Đã hoàn thành',
    gallery: [img2, img3, img4]
  },
  {
    id: 'c10',
    title: 'Skyline Duplex - Bàn giao',
    slug: 'skyline-duplex-ban-giao',
    status: 'Đã hoàn thiện',
    location: 'Bình Thạnh, TP.HCM',
    coverImg: img3,
    overview: 'Căn hộ Duplex đã được trang bị đầy đủ thiết bị smarthome, rèm cửa tự động và nội thất nhập khẩu.',
    materials: ['Hệ thống điện thông minh', 'Kính Low-E'],
    timeline: 'Đã hoàn thành',
    gallery: [img3, img4, img1]
  },
  {
    id: 'c11',
    title: 'Green Office - Bàn giao',
    slug: 'green-office-ban-giao',
    status: 'Đã hoàn thiện',
    location: 'Q.1, TP.HCM',
    coverImg: img4,
    overview: 'Văn phòng xanh với không gian mở đã được hoàn thành đúng tiến độ, đáp ứng đầy đủ tiêu chuẩn LEED.',
    materials: ['Vật liệu thân thiện môi trường', 'Đèn LED tiết kiệm điện'],
    timeline: 'Đã hoàn thành',
    gallery: [img4, img1, img2]
  },
  {
    id: 'c12',
    title: 'Riverside Mansion - Bàn giao',
    slug: 'riverside-mansion-ban-giao',
    status: 'Đã hoàn thiện',
    location: 'Thủ Đức, TP.HCM',
    coverImg: img1,
    overview: 'Dinh thự ven sông với phong cách Tân cổ điển đã hoàn thành các hạng mục đắp chỉ phào và sơn mạ vàng.',
    materials: ['Sơn mạ vàng 24K', 'Đá cẩm thạch'],
    timeline: 'Đã hoàn thành',
    gallery: [img1, img2, img3]
  }
];

export const blogData = [
  {
    id: 'b0',
    title: "Xu hướng thiết kế biệt thự nhiệt đới (Tropical Villa) năm 2026",
    slug: "xu-huong-thiet-ke-biet-thu-nhiet-doi-tropical-villa-nam-2026",
    excerpt: "Kiến trúc biệt thự nhiệt đới (Tropical Villa) đang trở thành xu hướng dẫn đầu cho không gian sống sinh thái cao cấp tại Việt Nam trong năm 2026. Cùng khám phá các giải pháp tối ưu không gian xanh...",
    content: "## 1. Biệt thự nhiệt đới là gì?\nBiệt thự nhiệt đới (Tropical Villa) là sự giao hòa tuyệt đối giữa kiến trúc hiện đại và hệ sinh thái bản địa. Xu hướng này hướng đến việc tối ưu vi khí hậu, đón gió tự nhiên và đưa thảm thực vật nhiệt đới xanh mát vào trung tâm không gian sống.\n\n## 2. Các đặc trưng cốt lõi của phong cách Tropical\n### Vật liệu tự nhiên thô mộc\nƯu tiên hàng đầu trong thiết kế Tropical Villa là các vật liệu nguyên bản, thô mộc như gỗ tự nhiên (đặc biệt là gỗ sồi, gỗ óc chó hoặc gỗ teak chịu ẩm), đá tự nhiên, xi măng trần, mây tre đan và gạch nung. Những vật liệu này không chỉ mang lại sự ấm áp mà còn có khả năng điều hòa nhiệt độ cực tốt cho ngôi nhà.\n\n### Thiết kế mở và kết nối không gian liền mạch\nĐể xóa nhòa ranh giới giữa trong nhà và ngoài trời, các diện kính lớn sát trần cùng hệ thống cửa trượt tiện lợi được áp dụng tối đa. Điều này giúp không gian bên trong luôn ngập tràn ánh sáng tự nhiên và mở ra tầm nhìn xanh mát hướng ra khu vườn xung quanh.\n\n### Mảng xanh và mặt nước điều hòa\nTích hợp cây xanh và hồ nước (như hồ cá Koi, bể bơi tràn bờ) không chỉ tạo nên điểm nhấn thẩm mỹ đắt giá mà còn đóng vai trò là chiếc 'điều hòa tự nhiên' khổng lồ, lọc không khí và mang lại luồng gió mát rượi cho toàn bộ ngôi nhà.\n\n## 3. Giải pháp chuẩn SEO cho thiết kế Tropical Villa tại Việt Nam\n### Tối ưu hóa vi khí hậu và thông gió tự nhiên\nViệc nghiên cứu hướng nắng, hướng gió để bố trí hệ thống lam chắn nắng gỗ và giếng trời là yếu tố sống còn giúp ngôi nhà mát mẻ quanh năm mà không phụ thuộc nhiều vào điều hòa không khí.\n\n### Ứng dụng vật liệu địa phương bền vững\nBằng việc chọn lựa các nhà cung cấp vật liệu nội thất uy tín tại địa phương, công trình vừa rút ngắn thời gian thi công vừa góp phần giảm lượng phát thải carbon ra môi trường, tạo lập một phong cách sống bền vững đích thực.\n\n## 4. Kết luận\nKiến trúc biệt thự nhiệt đới không chỉ dừng lại ở một xu hướng thiết kế nhất thời, mà chính là triết lý sống an lành, chốn về bình yên sau những bộn bề của cuộc sống hiện đại. Hãy đồng hành cùng Luklak Saigon để kiến tạo nên những công trình mang đậm bản sắc cá nhân và bền vững cùng thời gian.",
    date: "02 Tháng 6, 2026",
    category: "Xu hướng",
    author: "Khúc Văn Hiển",
    coverImg: img4
  },
  {
    id: 'b1',
    title: "Xu hướng kiến trúc bền vững lên ngôi trong năm 2024",
    slug: "xu-huong-kien-truc-ben-vung-len-ngoi-trong-nam-2024",
    excerpt: "Khi nhận thức về môi trường ngày càng nâng cao, các giải pháp kiến trúc bền vững không còn là lựa chọn phụ mà đã trở thành tiêu chuẩn mới trong thiết kế nhà ở cao cấp...",
    content: "Kiến trúc bền vững (Sustainable Architecture) đang chuyển mình từ một khái niệm xa xỉ thành một tiêu chuẩn bắt buộc. Các công trình hiện đại không chỉ đòi hỏi sự hoàn mỹ về thẩm mỹ mà còn phải đáp ứng các tiêu chuẩn khắt khe về năng lượng và môi trường.\n\nTại Luklak Sài Gòn, chúng tôi luôn ưu tiên ứng dụng các vật liệu thân thiện với môi trường, thiết kế hệ thống lấy sáng và thông gió tự nhiên nhằm giảm thiểu tối đa năng lượng tiêu thụ. Việc kết hợp cây xanh vào không gian sống (Biophilic Design) cũng là một phần không thể thiếu trong các dự án mới nhất của chúng tôi.",
    date: "12 Tháng 5, 2024",
    category: "Xu hướng",
    author: "Kiến trúc sư trưởng",
    coverImg: img4
  },
  {
    id: 'b2',
    title: "Giải mã sức hút của phong cách Japandi",
    slug: "giai-ma-suc-hut-cua-phong-cach-japandi",
    excerpt: "Sự kết hợp hoàn hảo giữa triết lý Wabi-Sabi của Nhật Bản và sự tối giản, ấm áp của Scandinavian đang chinh phục giới mộ điệu.",
    content: "Japandi không chỉ là một phong cách trang trí nội thất, mà là một lối sống. Sự tinh giản (minimalism) của Bắc Âu kết hợp với vẻ đẹp không hoàn hảo (Wabi-Sabi) của Nhật Bản tạo ra những không gian vô cùng bình yên.\n\nMàu sắc chủ đạo thường là những tone màu đất ấm áp, kết hợp với vật liệu thô mộc như gỗ sáng màu, linen và mây tre đan. Tại Việt Nam, phong cách Japandi đang trở thành lựa chọn hàng đầu cho các căn hộ chung cư cao cấp nhờ khả năng tạo ra sự thanh tịnh giữa nhịp sống hối hả.",
    date: "05 Tháng 5, 2024",
    category: "Kiến thức",
    author: "Đội ngũ Thiết kế",
    coverImg: img1
  },
  {
    id: 'b3',
    title: "5 Lưu ý quan trọng khi thiết kế phòng khách không gian mở",
    slug: "5-luu-y-quan-trong-khi-thiet-ke-phong-khach-khong-gian-mo",
    excerpt: "Phòng khách liền bếp mang lại cảm giác rộng rãi, nhưng làm sao để phân chia khu vực tinh tế mà không phá vỡ tổng thể?",
    content: "Phòng khách không gian mở (Open Plan) là giải pháp tối ưu cho những ngôi nhà hiện đại. Tuy nhiên, việc thiếu các vách ngăn vật lý đòi hỏi sự khéo léo trong việc phân vùng chức năng.\n\nSử dụng thảm trải sàn, thay đổi độ cao trần nhà hoặc sử dụng hệ thống đèn chiếu sáng độc lập là những cách phân chia không gian cực kỳ hiệu quả mà vẫn giữ được sự xuyên suốt. Một chiếc đảo bếp (kitchen island) lớn cũng là giải pháp chuyển tiếp hoàn hảo giữa khu vực nấu nướng và không gian tiếp khách.",
    date: "28 Tháng 4, 2024",
    category: "Tư vấn thiết kế",
    author: "Chuyên gia nội thất",
    coverImg: img2
  }
];

export const hoatDongData = [
  {
    id: 'h1',
    title: "Lễ ký kết hợp tác chiến lược giữa Luklak và đối tác An Cường",
    slug: "le-ky-ket-hop-tac-chien-luoc-giua-luklak-va-doi-tac-an-cuong",
    excerpt: "Sự kiện đánh dấu cột mốc quan trọng trong việc nâng cao chất lượng vật tư đầu vào, đảm bảo mang đến những sản phẩm nội thất hoàn mỹ nhất cho khách hàng...",
    content: "## 1. Cột mốc quan trọng trong hành trình phát triển của Luklak Saigon\nSáng ngày 20/4/2024, Lễ ký kết hợp tác chiến lược giữa Luklak Saigon và Tập đoàn Gỗ An Cường đã chính thức diễn ra tại trụ sở chính. Đây là bước đi chiến lược quan trọng nhằm chuẩn hóa toàn bộ nguồn vật tư gỗ công nghiệp cao cấp, củng cố cam kết mang đến những không gian sống tinh tế, chất lượng vượt trội và an toàn sức khỏe cho khách hàng của chúng tôi.\n\n## 2. Các nội dung thỏa thuận hợp tác chính\n### Cam kết sử dụng 100% gỗ công nghiệp tiêu chuẩn E1 Châu Âu\nTheo thỏa thuận được ký kết, Tập đoàn Gỗ An Cường sẽ cung cấp trực tiếp các dòng sản phẩm gỗ công nghiệp chất lượng cao cho các công trình do Luklak thiết kế và thi công. Điểm nổi bật nhất của nguồn vật tư này là toàn bộ ván gỗ đều đạt tiêu chuẩn E1 của Châu Âu – tiêu chuẩn khắt khe nhất hiện nay về nồng độ phát thải Formaldehyde (nhỏ hơn 0.1ppm), đảm bảo an toàn tuyệt đối cho hệ hô hấp của người sử dụng, đặc biệt là gia đình có trẻ nhỏ và người lớn tuổi.\n\n### Ứng dụng các dòng bề mặt trang trí thời thượng\nSự hợp tác này cũng giúp Luklak cập nhật sớm nhất các bộ sưu tập bề mặt vật liệu mới từ An Cường như Acrylic bóng gương, dòng Laminate siêu mờ kháng vân tay hay các bề mặt gỗ giả đá, giả da vô cùng sang trọng. Điều này mang lại sự đa dạng trong ngôn ngữ thiết kế và giúp mỗi căn biệt thự, căn hộ cao cấp của Luklak khoác lên mình vẻ đẹp tinh tế, thời thượng nhất.\n\n## 3. Giá trị bền vững kiến tạo cho khách hàng\n### Quy trình giám sát chất lượng từ khâu đầu vào\nBằng việc hợp tác trực tiếp không qua trung gian, khách hàng của Luklak hoàn toàn yên tâm về nguồn gốc xuất xứ của từng tấm ván gỗ được thi công trên thực tế. Mọi sản phẩm bàn giao đều đi kèm chứng nhận xuất xứ gỗ An Cường chính hãng, loại bỏ hoàn toàn rủi ro về vật tư kém chất lượng trên thị trường.\n\n### Dịch vụ bảo hành và hậu mãi đồng hành dài hạn\nBên cạnh cung cấp vật liệu, hai bên cũng cam kết hỗ trợ tối đa kỹ thuật trong khâu sản xuất và lắp đặt nội thất đồ gỗ. Điều này giúp tối ưu độ bền cơ lý của tủ bếp, tủ áo, giường ngủ và nâng cao chất lượng dịch vụ bảo hành nội thất dài hạn mà Luklak đang cung cấp cho các chủ đầu tư.\n\n## 4. Tầm nhìn chiến lược tương lai\nSự kiện ký kết hợp tác chiến lược này là minh chứng rõ nét nhất cho triết lý 'Thiết kế đi đôi với Thực thi' mà Luklak Saigon luôn theo đuổi. Chúng tôi tin rằng, một bản thiết kế dù có bay bổng hay đẳng cấp đến đâu cũng chỉ có thể hoàn mỹ khi được chế tác từ những chất liệu cao cấp nhất và lắp đặt bằng sự tận tâm, chuyên nghiệp nhất.",
    date: "20 Tháng 4, 2024",
    category: "HOẠT ĐỘNG LUKLAK",
    author: "Ban Truyền thông",
    coverImg: img3
  },
  {
    id: 'h2',
    title: "Lễ cất nóc siêu dự án The Monolith tại Hà Nội",
    slug: "le-cat-noc-sieu-du-an-the-monolith-tai-ha-noi",
    
    excerpt: "Vượt qua mọi khó khăn về thời tiết, đội ngũ kỹ sư Luklak đã đưa dự án cán đích phần thô đúng tiến độ cam kết.",
    content: "Dự án The Monolith - Khu đô thị sinh thái cao cấp tại ngoại ô Hà Nội đã chính thức cất nóc sau 6 tháng thi công liên tục.\n\nĐây là một trong những dự án có yêu cầu kỹ thuật kết cấu phức tạp nhất mà Luklak đảm nhận trong năm nay. Đội ngũ kỹ sư và công nhân đã làm việc không ngừng nghỉ, áp dụng các công nghệ thi công cốp pha trượt hiện đại để đẩy nhanh tiến độ mà vẫn đảm bảo độ chính xác tuyệt đối.",
    date: "15 Tháng 4, 2024",
    category: "BEHIND THE SPACE",
    author: "Ban Quản lý Dự án",
    coverImg: img1
  },
  {
    id: 'h3',
    title: "Teambuilding 2024: Gắn kết sức mạnh tập thể",
    slug: "teambuilding-2024-gan-ket-suc-manh-tap-the",
    excerpt: "Chuyến đi 3 ngày 2 đêm tại Phú Quốc đã mang lại những phút giây thư giãn và nạp lại năng lượng cho toàn thể nhân viên.",
    content: "Với thông điệp 'One Team - One Dream', chuyến Teambuilding thường niên của Luklak Saigon tại Đảo ngọc Phú Quốc đã kết thúc rực rỡ.\n\nKhông chỉ là khoảng thời gian nghỉ ngơi sau chuỗi ngày bận rộn trên bản vẽ và công trường, đây còn là cơ hội để các phòng ban thấu hiểu nhau hơn qua các trò chơi tập thể đòi hỏi sự đồng lòng và sáng tạo. Chắc chắn sau chuyến đi này, đội ngũ Luklak sẽ quay trở lại làm việc với 200% năng lượng.",
    date: "05 Tháng 4, 2024",
    category: "HOẠT ĐỘNG LUKLAK",
    author: "Công đoàn",
    coverImg: img2
  },
  {
    id: 'h4',
    title: "Luklak khai trương văn phòng đại diện mới tại TP.HCM",
    slug: "luklak-khai-truong-van-phong-dai-dien-moi-tai-tphcm",
    excerpt: "Sự kiện khai trương văn phòng đại diện mới khẳng định bước tiến mạnh mẽ của Luklak tại thị trường miền Nam...",
    content: "Văn phòng mới tọa lạc tại vị trí đắc địa, được thiết kế theo phong cách tối giản Japandi mang đậm dấu ấn kiến trúc của Luklak...",
    date: "01 Tháng 5, 2024",
    category: "TIN TỨC",
    author: "Ban Truyền thông",
    coverImg: img4
  },
  {
    id: 'h5',
    title: "Behind The Space: Thiết kế căn hộ Japandi tối giản",
    slug: "behind-the-space-thiet-ke-can-ho-japandi-toi-gian",
    excerpt: "Hành trình từ ý tưởng phác thảo đến thực tế thi công trọn gói căn hộ Landmark của đội ngũ thiết kế Luklak...",
    content: "Căn hộ Landmark được hoàn thiện tỉ mỉ từng chi tiết gỗ, đá và ánh sáng nhằm mang lại trải nghiệm sống mộc mạc yên bình...",
    date: "25 Tháng 4, 2024",
    category: "BEHIND THE SPACE",
    author: "Đội ngũ Thiết kế",
    coverImg: img1
  },
  {
    id: 'h6',
    title: "Xu hướng thiết kế không gian làm việc xanh năm 2024",
    slug: "xu-huong-thiet-ke-khong-gian-lam-viec-xanh-nam-2024",
    excerpt: "Tích hợp mảng xanh vào văn phòng không chỉ tăng năng suất làm việc mà còn bảo vệ sức khỏe nhân viên...",
    content: "Các giải pháp chiếu sáng thông minh kết hợp hệ thống cây xanh thanh lọc không khí được ứng dụng tối đa trong dự án văn phòng mới...",
    date: "10 Tháng 4, 2024",
    category: "TIN TỨC",
    author: "Ban Biên tập",
    coverImg: img2
  }
];

// Tự động đồng bộ các công trình thực tế vào mảng projectsData để hỗ trợ xem chi tiết tại /du-an/[slug]
constructionProjectsData.forEach(c => {
  if (!projectsData.some(p => p.slug === c.slug)) {
    projectsData.push({
      id: c.id,
      title: c.title,
      slug: c.slug,
      category: 'Công trình thực tế',
      location: c.location,
      area: c.timeline || 'Đang cập nhật',
      style: 'Thi công hoàn thiện',
      year: c.status || '2024',
      overview: c.overview,
      coverImg: c.coverImg,
      images: c.gallery || [c.coverImg]
    });
  }
});

export const pressData = [
  {
    id: 1,
    title: "Nhà ống 80m2 với hình dáng vòm ngẫu hứng",
    source: "vnexpress.net",
    url: "https://vnexpress.net",
    coverImg: img1
  },
  {
    id: 2,
    title: "Room tour: Sự giao hòa không gian và lối sống",
    source: "elledecoration.vn",
    url: "https://elledecoration.vn",
    coverImg: img2
  },
  {
    id: 3,
    title: "Nhà phố 50m2 với thang máy trong nhà",
    source: "archdaily.com",
    url: "https://www.archdaily.com",
    coverImg: img3
  },
  {
    id: 4,
    title: "Kiến tạo tổ ấm tinh tế và gần gũi với thiên nhiên",
    source: "elledecoration.vn",
    url: "https://elledecoration.vn",
    coverImg: img4
  },
  {
    id: 5,
    title: "Không gian sống tối giản mang đậm triết lý Wabi-Sabi",
    source: "kientruc.vn",
    url: "https://kientruc.vn",
    coverImg: img1
  },
  {
    id: 6,
    title: "Biệt thự hiện đại nổi bật với thiết kế giếng trời lớn",
    source: "vnexpress.net",
    url: "https://vnexpress.net",
    coverImg: img2
  }
];
