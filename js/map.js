let map;

function initMap() {
  const mapContainer = document.getElementById('map');
  const options = {
    center: new kakao.maps.LatLng(37.56667, 126.97806),  // 서울시청 좌표를 중심으로 설정
    level: 10
  };

  map = new kakao.maps.Map(mapContainer, options);

  // 전통 시장 마커 추가
  const traditionalMarketPosition = new kakao.maps.LatLng(37.57243, 126.95937);
  addMarker(traditionalMarketPosition, '전통 시장', '전통 시장 설명');

  // 대형 슈퍼마켓 마커 추가
  const supermarketPosition = new kakao.maps.LatLng(37.56652, 126.97703);
  addMarker(supermarketPosition, '대형 슈퍼마켓', '대형 슈퍼마켓 설명');
}

function addMarker(position, title, content) {
  const marker = new kakao.maps.Marker({
    position: position,
    title: title
  });

  marker.setMap(map);

  const infoWindow = new kakao.maps.InfoWindow({
    content: `<div style="padding:5px;font-size:12px;">${content}</div>`
  });

  kakao.maps.event.addListener(marker, 'click', function() {
    infoWindow.open(map, marker);
  });
}

// 카카오 맵 SDK 로딩 후 initMap 함수 호출
kakao.maps.load(() => {
  initMap();
});