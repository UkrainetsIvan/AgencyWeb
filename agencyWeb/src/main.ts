// import 'zone.js/node';
// import { enableProdMode } from '@angular/core';
// import { ngExpressEngine } from '@nguniversal/express-engine';
// import * as express from 'express';
// import { join } from 'path';
//
// // Імпортуйте ваш модуль
// import { AppServerModule } from './dist/your-app-name/server/main'; // Змініть на правильний шлях
//
// enableProdMode();
//
// const app = express();
//
// const PORT = process.env.PORT || 4000;
// const DIST_FOLDER = join(process.cwd(), 'dist/your-app-name/browser');
//
// app.engine('html', ngExpressEngine({
//   bootstrap: AppServerModule,
// }));
//
// app.set('view engine', 'html');
// app.set('views', DIST_FOLDER);
//
// // Статичні файли
// app.get('*.*', express.static(DIST_FOLDER, {
//   maxAge: '1y'
// }));
//
// // Усі звичайні маршрути використовують Universal engine
// app.get('*', (req, res) => {
//   res.render('index', { req });
// });
//
// app.listen(PORT, () => {
//   console.log(`Node server listening on http://localhost:${PORT}`);
// });

