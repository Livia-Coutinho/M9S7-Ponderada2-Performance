# M9S7-Ponderada2-Performance

O endpoint escolhido do meu projeto em grupo é acessado através do método GET e tem o path '/email/send-emails'. Quando esse endpoint é acessado, ele invoca o método sendEmailsToUsers() no serviço EmailService e retorna a resposta gerada por esse método. Portanto, este endpoint permite enviar emails para usuários.
![image](https://github.com/Livia-Coutinho/M9S7-Ponderada2-Performance/assets/99189965/9a7b2702-a948-41c1-a96b-9121026f16a9)

## Explicação do código de teste
![image](https://github.com/Livia-Coutinho/M9S7-Ponderada2-Performance/assets/99189965/183043b5-5d09-4b1c-a0e3-38e7cf0498f5)
</br>

**1. Imports:**
- **import http from 'k6/http';:** Importa o módulo HTTP do k6, que fornece funções para enviar solicitações HTTP durante o teste.
- **import { check } from 'k6';:** Importa a função check do k6, que é usada para validar as respostas HTTP recebidas durante o teste.
- **import { sleep } from 'k6';:** Importa a função sleep do k6, que é usada para adicionar atrasos entre as solicitações durante o teste.

**2. Configuração de Opções:**
- **options:** Define as opções de execução do teste, como o número de Virtual Users (VUs), a quantidade de iterações por VU e a duração total do teste. Neste caso, está configurado para simular 10 VUs, cada um realizando 100 iterações durante 10 segundos.

**3. Função de teste:**
- **export default function () { ... }:** Define a função principal do teste. Esta função será chamada repetidamente pelo k6 durante a execução do teste.


**4. Solicitação HTTP:**

- **const url** = 'http://localhost:3001/health-check';: Define a URL da rota GET que será testada. Neste caso, é uma rota de verificação de saúde em localhost na porta 3001.
- **const response** = http.get(url);: Envia uma solicitação GET para a URL definida e armazena a resposta.

**5. Validação da resposta:**

- **check(response, { ... });:** Usa a função check para validar a resposta da solicitação. Neste caso, verifica se o status da resposta é 200 (OK).

**6. Atraso:**

- **sleep(1);:** Adiciona um atraso de 1 segundo entre as solicitações. Isso pode ser usado para simular um comportamento mais realista de usuários interagindo com o sistema.

## Interpretação dos resultados K6
![image](https://github.com/Livia-Coutinho/M9S7-Ponderada2-Performance/assets/99189965/688d6e45-7c4d-49d0-9def-f1790ca93b3b)
</br>
- **Status is 200:** Isso significa que todas as solicitações HTTP feitas durante o teste retornaram um status 200 (OK).
- **Checks:** Indica que todas as verificações definidas no script foram bem-sucedidas. Neste caso, todas as solicitações retornaram o status esperado (200).
- **Data received:** Mostra a quantidade total de dados recebidos do servidor durante o teste. No total, foram recebidos 27 kB, a uma taxa média de 2.6 kB/s.
- **Data sent:** Indica a quantidade total de dados enviados para o servidor durante o teste. Foram enviados 9.2 kB, a uma taxa média de 905 B/s.
- **HTTP request blocked:** Fornece estatísticas sobre o tempo médio que as solicitações passaram bloqueadas antes de serem enviadas. Isso inclui tempos de espera em filas de solicitação.
- **HTTP request connecting:** Mostra o tempo médio que as solicitações levam para se conectar ao servidor.
- **HTTP request duration:** Indica a duração média de uma solicitação HTTP, desde o início até o recebimento da resposta completa do servidor.
- **HTTP request failed:** Mostra a porcentagem de solicitações que falharam durante o teste. Neste caso, todas as solicitações foram bem-sucedidas (0% de falha).
- **HTTP request receiving:** Indica o tempo médio que as solicitações levam para receber a resposta do servidor.
- **HTTP request sending:** Mostra o tempo médio que as solicitações levam para serem enviadas para o servidor.
- **HTTP request TLS handshaking:** Indica o tempo médio gasto no handshake TLS (se as solicitações estiverem usando HTTPS).
- **HTTP request waiting:** Mostra o tempo médio que as solicitações levam enquanto esperam por uma resposta do servidor.
- **HTTP requests:** Mostra o número total de solicitações HTTP feitas durante o teste, bem como a taxa de solicitações por segundo.
- **Iteration duration:** Indica a duração média de uma iteração completa do teste. Isso inclui o tempo gasto na execução do script e o tempo de espera entre as iterações.
- **Iterations:** Mostra o número total de iterações completas do teste.
- **VUs (Virtual Users):** Mostra o número atual de usuários virtuais simulados durante o teste.
- **VUs max:** Indica o número máximo de usuários virtuais configurados para este teste.
.
.
</br>
</br>
</br>

# Passo a passo da atividade

#### Rodar o backend - npx prisma generate
![image](https://github.com/Livia-Coutinho/M9S7-Ponderada2-Performance/assets/99189965/aba7c070-75b6-49e1-a290-835ff1eafd75)

#### Rodar o backend - npx prisma migrate dev
![image](https://github.com/Livia-Coutinho/M9S7-Ponderada2-Performance/assets/99189965/c3217cae-a55e-42cb-8a8f-b5f6debfe9b1)

#### Rodar o backend - docker compose up
![image](https://github.com/Livia-Coutinho/M9S7-Ponderada2-Performance/assets/99189965/3ee71cbe-c8b2-431c-8918-e1b74e488f58)

#### Rodar o backend - nest start --watch
![image](https://github.com/Livia-Coutinho/M9S7-Ponderada2-Performance/assets/99189965/3a3ea645-114d-49cb-8d21-ecb9dcbca7af)

#### Criar no backend pasta k6 com arquivo de teste .js
![image](https://github.com/Livia-Coutinho/M9S7-Ponderada2-Performance/assets/99189965/c36cbd02-bd9e-4c60-89a3-b50a20eedbe6)

#### Verificar rota do endpoint escolhido
![image](https://github.com/Livia-Coutinho/M9S7-Ponderada2-Performance/assets/99189965/8dc19b60-77d3-46af-91cc-25b8181e035c)

#### Revisar instalação do K6
![image](https://github.com/Livia-Coutinho/M9S7-Ponderada2-Performance/assets/99189965/2b388b16-086e-47b8-a916-9b6b30058f99)

#### Rodar o teste K6
![image](https://github.com/Livia-Coutinho/M9S7-Ponderada2-Performance/assets/99189965/eb6daecb-7bb9-4278-96d2-c02e00a41f4e)

![image](https://github.com/Livia-Coutinho/M9S7-Ponderada2-Performance/assets/99189965/d01452ba-f072-4e18-83a5-8b4fc26cada5)
