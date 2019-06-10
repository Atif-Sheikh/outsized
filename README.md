# outsized webapp

Front end for all service panels

## Setup & Development

```
git clone https://github.com/outsizedgroup/webapp
cd webapp
cp .env.sample .env
yarn
yarn dev
```

## To enable https on localhost

- Add the following in your `/etc/hosts`

```
127.0.0.1     local.outsized.com
```

- Set the following properties in your `.env`

```
SELF_URL=http://local.outsized.com:3000/
```
