# papago-server

## 설치

```shell
cd papago-server
yarn install
```

## 환경변수

### /papago-server/.env

```
PAPAGO_ID={네이버 API ID}
PAPAGO_SECRET={네이버 API SECRET}
```

## 시작

```shell
yarn start:dev
```

<br>

## API 명세

- base url

```
http://localhost:8000
```

### POST: /papago

- headers

```json
{
  "Content-Type": "application/json"
}
```

- body

```js
const body = JSON.stringify({
  source: 'en',
  target: 'ko',
  text: en,
});
```
