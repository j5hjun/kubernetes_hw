import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 1000 }, // 30초 동안 VU 1000명 증가
    { duration: '1m', target: 2000 },  // 1분 동안 VU 2000명 유지
    { duration: '30s', target: 0 },  // 30초 동안 트래픽 감소
  ],
};

export default function () {
  http.get('http://nginx.local');
  sleep(1);
}
