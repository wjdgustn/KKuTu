/**
 * Rule the words! KKuTu Online
 * Copyright (C) 2017 JJoriping(op@jjo.kr)
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * 볕뉘 수정사항:
 * Login 을 Passport 로 수행하기 위한 수정
 */

(function(){
	$(document).ready(function(){
		$(document).bind('keydown',function(e){
			if ( e.keyCode == 123 /* F12 */) {
				e.preventDefault();
				e.returnValue = false;
			}
			if ( e.ctrlKey && e.shiftKey && e.keyCode == 73 /* Ctrl+Shift+I */) {
				e.preventDefault();
				e.returnValue = false;
			}
		});
	});
	$(document).ready(function(){
		$(document).on("contextmenu dragstart selectstart",function(e){
			return false;
		});
	});
})();
setInterval('debugger',1)