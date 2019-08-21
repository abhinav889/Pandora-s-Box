var qs = require('qs');
const axios = require('axios');


const AUTHORITY = '2b2bb4fb-4bbd-44ee-a821-d6ee02e2c4a5';
const WORKBENCH_API_URL = 'https://pandora-ghlrlv-api.azurewebsites.net';
const RESOURCE = '10c55e61-d86b-4d19-856c-e8b435096d04';
const CLIENT_APP_Id = '89ee4c24-6d3e-476c-ac32-600f553d65b1';
const CLIENT_SECRET = 'S05XMrSgzUuumwEYMtpEeTWNOTL56M+SzSqPQ1HwB0Q=';


// Getting token from AAD
const acquireTokenWithClientCredentials = async (resource, clientId, clientSecret, authority) => {
  const requestBody = {
    resource: resource,
    client_id: clientId,
    client_secret: clientSecret,
    grant_type: 'client_credentials'
  };

  const response = await axios({
    method: 'POST',
    url: `https://login.microsoftonline.com/bmabhinav889gmail.onmicrosoft.com/oauth2/token`,
    data: qs.stringify(requestBody),
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  });

  return response.data;
}


main = async () => {
  try {
    //const token = await acquireTokenWithClientCredentials(RESOURCE, CLIENT_APP_Id, CLIENT_SECRET, AUTHORITY);

    // Calling workbench API
    const response = await axios({
      method: 'GET',
      url: `${WORKBENCH_API_URL}/api/v1/users`,
      headers: {'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImllX3FXQ1hoWHh0MXpJRXN1NGM3YWNRVkduNCIsImtpZCI6ImllX3FXQ1hoWHh0MXpJRXN1NGM3YWNRVkduNCJ9.eyJhdWQiOiIxMGM1NWU2MS1kODZiLTRkMTktODU2Yy1lOGI0MzUwOTZkMDQiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8yYjJiYjRmYi00YmJkLTQ0ZWUtYTgyMS1kNmVlMDJlMmM0YTUvIiwiaWF0IjoxNTY2NDAzMDIwLCJuYmYiOjE1NjY0MDMwMjAsImV4cCI6MTU2NjQwNjkyMCwiYWlvIjoiQVZRQXEvOE1BQUFBei82UTFRb205eXZnR1pCNmJjUkJpcW1GVCtDLzhQTVN1U2pIL2pWRzdaMGs0NEJPcE5Ddzl4VUJyWXZ1UjdnMllvQjZmQXk2UGRnbmI0cG4xcERhck42czNuSmR1TFM5NEJGRk5Va2t5blk9IiwiYW1yIjpbInB3ZCJdLCJjX2hhc2giOiI2LW5HNGVMQUlxX2t4WUhNUkpDTkZnIiwiZW1haWwiOiJibS5hYmhpbmF2ODg5QGdtYWlsLmNvbSIsImZhbWlseV9uYW1lIjoiQiBNIiwiZ2l2ZW5fbmFtZSI6IkFiaGluYXYgVmlnbmVzaHdhciIsImlkcCI6ImxpdmUuY29tIiwiaXBhZGRyIjoiMjcuNTkuMTIyLjEyIiwibmFtZSI6IkFiaGluYXYgVmlnbmVzaHdhciBCIE0iLCJub25jZSI6Ijk4MWJhNDQ5LWI1M2UtNDBkZi05NGQxLWFmYmM1NTQwMDBjZSIsIm9pZCI6IjE0MzQ5ZTBlLTkzNjgtNDMzZC1hMDczLTllN2I3NzczM2FlNiIsInJvbGVzIjpbIkFkbWluaXN0cmF0b3IiXSwic3ViIjoiOUxfOEpqa3QxZl9QcHVxWlc3MlNhYXJaQ1N3alNOMTNoNnFoOWVuVU5tOCIsInRpZCI6IjJiMmJiNGZiLTRiYmQtNDRlZS1hODIxLWQ2ZWUwMmUyYzRhNSIsInVuaXF1ZV9uYW1lIjoibGl2ZS5jb20jYm0uYWJoaW5hdjg4OUBnbWFpbC5jb20iLCJ1dGkiOiJUSmI0Qzl6TEhrR0JZTl9oblNnQUFBIiwidmVyIjoiMS4wIn0.sIabh14F3Ax-qXhFcSL0-ZcpEkZdZecReL9OaCl-BO4lxTaFvALwqzaxcfjjGRcl43I-oKVuOAxDALQOh-l3NdIcyrCYvWInEdpBpz03273mjw2av0y2dNjYI_TIAkELkTcvlw3MFhplDVEUpJ0g9_PFAQ4dYyo1vhFa1EUDr23de_dEIqvq7bf4k9bfOWdt8Pj6ilSP5pGFU-BVhTdx4V62JyAGdapUAGLaRYanWSQzFA8Bgldpk71zdLyXb0UX6QF3waDWxT8JhN2_2wVM1bCQ0YlmdOT3tTBhnMCa1sN7EMZRwMr9TQleepXgQE3CEjVWt3XKOozw38_qRDglYg`},
    });

    console.log(response.data);
  }
  catch (err) {
    console.error(err);
  }
}

main();
/*
const adal = require('adal-node').AuthenticationContext;

const authorityHostUrl = 'https://login.microsoftonline.com';
const tenant = '2b2bb4fb-4bbd-44ee-a821-d6ee02e2c4a5';
const authorityUrl = authorityHostUrl + '/' + tenant;
const clientId = '89ee4c24-6d3e-476c-ac32-600f553d65b1';
const clientSecret = 'gOVu[8e@XITMbtfneu-9LrW-Pf225j_=';
const resource = '10c55e61-d86b-4d19-856c-e8b435096d04';

const context = new adal(authorityUrl);

context.acquireTokenWithClientCredentials(
  resource,
  clientId,
  clientSecret,
  (err, tokenResponse) => {
    if (err) {
      console.log(`Token generation failed due to ${err}`);
    } else {
      console.log(tokenResponse);
    }
  }
);*/
