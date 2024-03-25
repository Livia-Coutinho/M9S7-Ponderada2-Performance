import http from 'k6/http';
import { check } from 'k6';
import { sleep } from 'k6'

export let options = {
  vus: 10, // Número de Virtual Users (VUs)
  iterations: 100, // Quantidade de iterações por VU
  duration: '10s', // Duração total do teste em segundos
};

export default function () {
  // Defina a URL da rota GET que você deseja testar
  const url = 'http://localhost:3001/health-check';

  // Faça a requisição GET
  const response = http.get(url);

  // Verifique se a requisição foi bem-sucedida
  check(response, {
    'status is 200': (r) => r.status === 200,
  });
  sleep(1);
}