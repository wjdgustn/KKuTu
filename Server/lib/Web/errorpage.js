/**
Rule the words! KKuTu Online
Copyright (C) 2017 JJoriping(op@jjo.kr)
Copyright (C) 2017 KKuTu Korea(op@kkutu.co.kr)
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with this program. If not, see <http://www.gnu.org/licenses/>.
*/

exports.init = function(app) {
  exports.send = function(req, res, code, end_time) {
    switch (code) {
      case 200:
        res.sendStatus(200);
        break;
      case 400: //bad request
		    res.status(code);
        res.format({
          html: function() {
            res.render('error', {
              code: 400,
              title: "400 오류!",
              description: "올바르지 않은 요청 (Bad request)",
              message: "(진지하게) 올바른 요청이 아닙니다... :(",
              img: 1
            });
          },
          json: function() {
            res.json({
              error: {
                code: 400,
                message: 'Bad request'
              }
            })
          },
          default: function() {
            res.type('txt').send(400)
          }
        });
        break;
      case 401: //unauthorized
		    res.status(code);
        res.format({
          html: function() {
            res.render('error', {
              code: 401,
              title: "401 오류!",
              description: "권한 없음 (Unauthorized)",
              message: "당신에겐 없습니다.. 권한이..",
              img: 1
            });
          },
          json: function() {
            res.json({
              error: {
                code: 401,
                message: 'Unauthorized'
              }
            })
          },
          default: function() {
            res.type('txt').send(401)
          }
        });
        break;
      case 404: //page not found
		    res.status(code);
        res.format({
          html: function() {
            res.render('error', {
              code: 404,
              title: "404 오류!",
              description: "페이지를 찾을 수 없음 (Page not found)",
              message: "잘못 오신 거 같은데..?",
              img: 1
            });
          },
          json: function() {
            res.json({
              error: {
                code: 404,
                message: 'Not found'
              }
            })
          },
          default: function() {
            res.type('txt').send(404)
          }
        });
        break;
      case 429: //too many request
		    res.status(code);
        res.format({
          html: function() {
            res.render('error', {
              code: 429,
              title: "429 오류!",
              description: "너무 많은 요청 (Too many request)",
              message: "요청이 너무 많아서 힘들어요..;; 조금만 쉬어요..",
              img: 3
            });
          },
          json: function() {
            res.json({
              error: {
                code: 429,
                message: 'Too many request'
              }
            })
          },
          default: function() {
            res.type('txt').send(429)
          }
        });
        break;
      case 500: //internal server error
		    res.status(code);
        try{res.format({
          html: function() {
            res.render('error', {
              code: 500,
              title: "500 오류!",
              description: "서버 오류 (Internal server error)",
              message: "서버에.. 오류가 났습니다.. 삐리빠빠뽀...",
              img: 2
            });
          },
          json: function() {
            res.json({
              error: {
                code: 500,
                message: 'Internal server error'
              }
            })
          },
          default: function() {
            res.type('txt').send(500)
          }
        })}catch(e){}
        break;
      case 999: //ban
        res.format({
          html: function() {
            res.render('error', {
              code: 999,
              title: "999 오류!",
              description: "서비스 이용약관에 따른 이용 정지",
              message: "서비스 이용약관에 따라 이용 정지되었습니다. 자세한 문의는 공식카페에 방문해 보세요.",
              img: 2,
              end_time: end_time
            });
          },
          json: function() {
            res.json({
              error: {
                code: 999,
                message: 'BAN'
              }
            })
          },
          default: function() {
            res.type('txt').send(999)
          }
        });
        break;
    }
  }
};