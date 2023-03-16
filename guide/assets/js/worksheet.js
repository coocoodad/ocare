var UIGuide = function() {
    var init = function() {
        workSheet.init();
    }
    var workSheet = {
        init: function() {
            const html = document.querySelector('html');
            if (localStorage.lightMode == 'dark') {
                html.setAttribute('light-mode', 'dark');
                html.classList.add('dark')
            } else {
                html.removeAttribute('light-mode');
                html.classList.remove('dark');
            }
            workSheet.makeHead();
            workSheet.makeBoard();
        },
        makeHead: function() {
            let $headerHtml = ''
            $headerHtml += '<h1><span class="offscreen">KB기업뱅킹</span></h1>';
            $headerHtml += '<button type="button" class="btn_util"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="65px" height="50px" viewBox="0 0 65 65" xml:space="preserve"><path class="bar b1" d="M20,23.912h23.997c0,0,16.004-0.501,16.004,13.416 S46.75,47.912,41.834,42.995S22.668,23.412,22.668,23.412"/><path class="bar b2" d="M24.751,41.995H44c0,0,16.001,1.167,16.001-12.25 c0-13.417-9.508-15.157-18.004-6.745S22.001,42.995,22.001,42.995"/><line class="bar b3" x1="30.125" y1="32.999" x2="43.997" y2="32.999"/></svg><span class="offscreen">메뉴열기</span></span></button>';
            $headerHtml += '<div class="g_util">';
            $headerHtml += '<div class="g_search">';
            $headerHtml += '<input type="text" id="Gsearch" placeholder="검색어를 입력하세요" />';
            $headerHtml += '<button type="button" id="btnGsearch"><span class="offscreen">검색하기</span></button>';
            $headerHtml += '</div>';
            $headerHtml += '<div class="switch">';
            $headerHtml += '<span class="bar"></span>';
            $headerHtml += '<ul>';
            $headerHtml += '<li><a href="/ocare/guide/html/worksheet.html" target="_blank">Worksheet</a></li>';
            $headerHtml += '<li><a href="/ocare/guide/html/guide.html" target="_blank">Guide</a></li>';
            $headerHtml += '<li><a href="/ocare/guide/html/document.html" target="_blank">Document</a></li>';
            $headerHtml += '</ul>';
            $headerHtml += '</div>';
            $headerHtml += '<div class="g_project">';
            $headerHtml += '<button type="button" class="current" title="프로젝트 목록보기">선택</button>';
            $headerHtml += '<ul class="g_list">';
            if (location.host == 'zocare.kbstar.com' || location.host == 'zobiz.kbstar.com' || location.host == 'ztadmin.kbstar.com' || location.host == 'zmnbank.kbstar.com') {
                $headerHtml += '<li><a href="https://zocare.kbstar.com/ocare/guide/html/worksheet.html" target="_blank">App</a></li>';
            } else {
                $headerHtml += '<li><a href="/ocare/guide/html/worksheet.html" target="_blank">App</a></li>';
            }
            if (location.host == 'zobiz.kbstar.com' || location.host == 'zocare.kbstar.com' || location.host == 'ztadmin.kbstar.com' || location.host == 'zmnbank.kbstar.com') {
                $headerHtml += '<li><a href="https://zobiz.kbstar.com/obiz/publishing_2022/guide/html/worksheet.html" target="_blank">PC</a></li>';
            } else {
                $headerHtml += '<li><a href="/obiz/publishing_2022/guide/html/worksheet.html" target="_blank">PC</a></li>';
            }
            if (location.host == 'ztadmin.kbstar.com' || location.host == 'zobiz.kbstar.com' || location.host == 'zocare.kbstar.com' || location.host == 'zmnbank.kbstar.com') {
                $headerHtml += '<li><a href="http://ztadmin.kbstar.com/bizAdmin/guide/html/worksheet.html" target="_blank">Admin</a></li>';
            } else {
                $headerHtml += '<li><a href="/bizAdmin/guide/html/worksheet.html" target="_blank">Admin</a></li>';
            }
            $headerHtml += '</ul>';
            $headerHtml += '</div>';
            $headerHtml += '<button type="button" class="btn_responsive"><i><i><i class="offscreen">메뉴</i></i></i></button>';
            $headerHtml += '</div>';
            let gHeader = document.querySelector('#gHeader');
            if (document.querySelectorAll('#gHeader').length > 0) gHeader.insertAdjacentHTML('beforeend', $headerHtml);
        },
        makeBoard: function() {
            const $slide = document.querySelectorAll('.g_board_tab .swiper-slide');
            const $lenth = $slide.length;
            let htmlBoard = function(boardid, data) {
                var html = '<div id="' + boardid + '" class="g_board_panel">';
                html += '<div class="panel_head">';
                html += '<div class="g_target">';
                html += '<ul class="swiper-wrapper">';
                html += '</ul>';
                html += '</div>';
                html += '<span class="g_status">';
                html += '<span class="num total">본수 : <strong class="num"></strong></span>';
                html += '<span class="num working">진행본수 : <strong class="num"></strong></span>';
                html += '<span class="num cp_num">완료본수 : <strong class="num"></strong></span>';
                html += '<span class="g_status_box"> <span class="bar"></span><span class="ing">진행률 : <strong class="num"></strong>%</span></span>';
                html += '</span>';
                html += '</div>';
                html += '<div class="g_alert_btn_set">';
                html += '</div>';
                html += '<div class="g_board">';
                html += '<table>';
                html += '<caption>메뉴별 코딩리스트</caption>';
                html += '<colgroup>';
                html += '<col style="width:50px">';
                html += '<col style="width:150px">';
                html += '<col style="width:90px">';
                html += '<col class="d1" style="width:auto">';
                html += '<col class="d2" style="width:auto">';
                html += '<col class="d3" style="width:auto">';
                html += '<col class="d4" style="width:auto">';
                html += '<col style="width:300px">';
                html += '<col style="width:90px">';
                html += '<col style="width:100px">';
                html += '<col style="width:100px">';
                html += '<col style="width:80px">';
                html += '<col style="width:100px">';
                html += '</colgroup>';
                html += '<thead>';
                html += '<tr>';
                html += '<th scope="col">No</th>';
                html += '<th scope="col" class="id">화면id</th>';
                html += '<th scope="col" class="type">화면타입</th>';
                html += '<th scope="col" class="deps d1">1Depth';
                html += '<th scope="col" class="deps d2">2Depth';
                html += '<th scope="col" class="deps d3">3Depth';
                html += '<th scope="col" class="deps d4">4Depth';
                html += '<th scope="col" class="name">화면명</th>';
                html += '<th scope="col" class="worker">';
                html += '<select>';
                html += '<option value="">작업자</option>';
                html += '</select>';
                html += '</th>';
                html += '<th scope="col" class="c_date">';
                html += '<select>';
                html += '<option value="">작업일</option>';
                html += '</select>';
                html += '</th>';
                html += '<th scope="col" class="m_date">';
                html += '<select>';
                html += '<option value="">수정일</option>';
                html += '</select>';
                html += '</th>';
                html += '<th scope="col" class="complete">상태</th>';
                html += '<th scope="col" class="etc">비고</th>';
                html += '</tr>';
                html += '</thead>';
                html += '<tbody>';
                html += data;
                html += '</tbody>';
                html += '</table>';
                html += '</div>';
                html += '</div>';
                $('.g_content').append(html);
            };
            var htmlTbody = function(data) {
                var $data = data;
                var tbodyHtml = '';
                var idx = 1;
                var urlLink = '';
                var createTr = function(obj) {
                    var trHtml = '';
                    if (obj.directory !== undefined && obj.directory !== '') {
                        urlLink = obj.directory;
                    } else {
                        (obj.state) ? trHtml += '<tr class="' + obj.state + '">': trHtml += '<tr>';
                        trHtml += '<td class="no">' + idx + '</td>';
                        idx += 1;
                        if (obj.id) {
                            if (obj.link) {
                                trHtml += '<td class="id">' + obj.id + '</td>';
                            } else {
                                trHtml += '<td class="id"><a href="' + urlLink + '/' + obj.id + '.html" target="_blank">' + obj.id + '</a></td>';
                            }
                        } else {
                            trHtml += '<td class="id"></td>';
                        }
                        if (obj.type) {
                            trHtml += '<td class="type"><span>' + obj.type + '</span></td>';
                        } else {
                            trHtml += '<td class="type"><span>본창</span></td>';
                        }
                        if (obj.depth1) {
                            trHtml += '<td class="depth1">' + obj.depth1 + '</td>';
                        } else {
                            trHtml += '<td class="depth1"></td>';
                        }
                        if (obj.depth2) {
                            trHtml += '<td class="depth2">' + obj.depth2 + '</td>';
                        } else {
                            trHtml += '<td class="depth2"></td>';
                        }
                        if (obj.depth3) {
                            trHtml += '<td class="depth3">' + obj.depth3 + '</td>';
                        } else {
                            trHtml += '<td class="depth3"></td>';
                        }
                        if (obj.depth4) {
                            trHtml += '<td class="depth4">' + obj.depth4 + '</td>';
                        } else {
                            trHtml += '<td class="depth4"></td>';
                        }
                        if (obj.name) {
                            trHtml += '<td class="name">' + obj.name + '</td>';
                        } else {
                            trHtml += '<td class="name"></td>';
                        }
                        if (obj.worker) {
                            trHtml += '<td class="worker">' + obj.worker + '</td>';
                        } else {
                            trHtml += '<td class="worker"></td>';
                        }
                        if (obj.workdate) {
                            trHtml += '<td class="c_date">' + obj.workdate + '</td>';
                        } else {
                            trHtml += '<td class="c_date"></td>';
                        }
                        if (obj.change) {
                            trHtml += '<td class="m_date">' + obj.change + '</td>';
                        } else {
                            trHtml += '<td class="m_date"></td>';
                        }
                        if (obj.complete && obj.state == undefined) {
                            trHtml += '<td class="complete"><span class="done">' + obj.complete + '</span></td>';
                        } else if (obj.state === 'del') {
                            trHtml += '<td class="complete"><span class="del">삭제</span></td>';
                        } else if (obj.state === 'hold') {
                            trHtml += '<td class="complete"><span class="hold">보류</span></td>';
                        } else if (obj.workdate) {
                            trHtml += '<td class="complete"><span class="ing">검수중</span></td>';
                        } else {
                            trHtml += '<td class="complete"><span>대기중</span></td>';
                        }
                        if (obj.etc) {
                            var remark = '';
                            $.each(obj.etc, function() {
                                if (this.indexOf('디자인확인') != -1) {
                                    remark += '<li class="design">' + this + '</li>';
                                } else if (this.indexOf('기획확인') != -1) {
                                    remark += '<li class="plan">' + this + '</li>';
                                } else {
                                    remark += '<li>' + this + '</li>';
                                }
                            });
                            trHtml += '<td class="etc"><ul class="remark">' + remark + '</ul><a href="' + urlLink + '/' + obj.id + '.html" class="btn_hover" target="_blank">' + obj.id + '</a></td>';
                        } else {
                            trHtml += '<td class="etc"><a href="' + urlLink + '/' + obj.id + '.html" class="btn_hover" target="_blank">' + obj.id + '</a></td>';
                        }
                    }
                    trHtml += '</tr>';
                    return trHtml;
                };
                $.each($data, function() {
                    tbodyHtml += createTr(this);
                });
                return tbodyHtml;
            };
            let LoadCount = 0;
            $slide.forEach(function(item, index) {
                let $rel = 'panel' + index;
                let $btn = item.querySelector('button');
                item.setAttribute('rel', $rel);
                let $json = $btn.getAttribute('data-json');
                let $dataHtml = '';
                if ($json !== undefined) {
                    ajax_get($json, function(data) {
                        if (data.length) $dataHtml = htmlTbody(data);
                        LoadCount += 1;
                        htmlBoard($rel, $dataHtml);
                        if (LoadCount === $lenth) workSheet.set.init();
                    });
                }
            });
            function ajax_get(url, callback) {
                var xmlhttp = new XMLHttpRequest();
                xmlhttp.onreadystatechange = function() {
                    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                        //console.log('responseText:' + xmlhttp.responseText);
                        try {
                            var data = JSON.parse(xmlhttp.responseText);
                        } catch(err) {
                            console.log(err.message + " in " + xmlhttp.responseText);
                            return;
                        }
                        callback(data);
                    }
                };
                xmlhttp.open("GET", url, true);
                xmlhttp.send();
            }
        }
    }

    let tabSwiper = '';
    let targetSwiper = [];
    workSheet.set = {
        init: function() {
            workSheet.set.header();
            workSheet.set.board();
            workSheet.set.state();
            workSheet.set.UI();
            workSheet.set.slide();
            workSheet.set.switchSet();
            workSheet.set.tab();
            workSheet.set.devicePreview();
            workSheet.set.searcher('#Gsearch');
            workSheet.set.resize();
            workSheet.set.scroll();
            workSheet.set.shortcut();
            workSheet.set.etcListChk();
        },
        header: function(title) {
            const $btnUtil = document.querySelector('.btn_util');
            const $html = document.querySelector('html');
            const $Gsearch = document.querySelector('#Gsearch');
            const $btnGsearch = document.querySelector('#btnGsearch');

            $btnUtil.addEventListener("click", (e) => {
                $html.classList.toggle('util_show');
                if ($html.classList.contains('util_show')) {
                    $Gsearch.addEventListener('keydown', (e) => {
                        if (e.keyCode == 13) $html.classList.remove('util_show');
                    });
                    $btnGsearch.addEventListener('click', (e) => {
                        $html.classList.remove('util_show');
                    });
                }
            });
        },
        switchSet: function() {
            const $body = document.querySelector('body');
            const $util = $body.getAttribute('data-util');
            const $switch = document.querySelector('.switch');
            const $switchArry = document.querySelectorAll('.switch li');
            const $switchA = document.querySelectorAll('.switch a');
            const $switchBar = document.querySelector('.switch .bar');
            $switchArry.forEach(item => {
                if ($util.charAt(0).toUpperCase() + $util.slice(1) === item.innerText) item.classList.add('active');
            });
            function switchFnc(tar) {
                let $switchActive = document.querySelector('.switch li.active'); 
                $switchActive = (tar !== undefined) ? tar : $switchActive;
                const _w = $switch.querySelector('ul').offsetWidth;
                const _x = $switchActive.offsetLeft;
                $switchBar.style.width = `${_w / $switchArry.length - 2}px`;
                $switchBar.style.left = `${_x}px`;
                $switchBar.style.opacity = '1';
                $switchBar.style.transform = 'scale(1)';
            }
            switchFnc();
            $switchA.forEach(item => {
                item.addEventListener('mouseover', function(){
                    switchFnc(item);
                });
                item.addEventListener('mouseout', function(){
                    switchFnc();
                });
            });
            window.addEventListener('resize', switchFnc());
        },
        tab: function() {
            const $tab = document.querySelectorAll('.g_board_tab ul li');
            const $tabCurrent = $tab[0].getAttribute('rel');
            const $panelCurrent = document.querySelector(`#${$tabCurrent}`);
            const $bar = document.querySelector(`#${$tabCurrent} .bar`);
            
            $tab[0].classList.add('active');
            $panelCurrent.classList.add('active');
            $bar.style.width = `${dataStorage.get($panelCurrent, "bar-width")}%`;

            $tab.forEach(item => {
                item.addEventListener('click', function(e){
                    e.preventDefault();
                    const $panelActive = document.querySelector(`#${item.getAttribute('rel')}`);
                    const $b = document.querySelector(`#${item.getAttribute('rel')} .bar`);
                    const body = document.querySelector('body');
                    item.classList.add('active');
                    getSiblings(item).forEach(i => {
                        i.classList.remove('active');
                    });
                    $panelActive.classList.add('active');
                    $b.style.width = `${dataStorage.get($panelActive, "bar-width")}%`;
                    getSiblings($panelActive).forEach(i => {
                        if(i.classList.contains('g_board_panel')) {
                            i.classList.remove('active');
                            i.querySelector('.bar').style.width = 0;
                        }
                    });
                    window.scroll({
                        behavior: 'smooth',
                        top: body.offsetTop,
                    });
                    targetSwiper.forEach(i => {
                        i.update();
                    });
                });
            });
        },
        board: function() {
            const $screenID = document.querySelectorAll('.g_board td.id a');
            $screenID.forEach(item => {
                const _href = item.getAttribute('href');
                const _txt = item.textContent;
                
                if (!!_href && _href.indexOf('#') !== 0) {
                    if (_href.indexOf(_txt) == -1 && _href.indexOf('.html') == -1) {
                        var _setHref = _href + _txt;
                        var _file = location.pathname.split('.').pop();
                        if (_file) _setHref = _setHref + '.' + _file;
                        item.setAttribute('href', _setHref);
                    }
                }
            });
            const $gBoard = document.querySelectorAll('.g_board');
            $gBoard.forEach(item => {
                let dayArry = [];
                let dayArry2 = [];
                let workerArry = [];
                item.querySelectorAll('tbody td.c_date').forEach(i => {
                    const _txt = i.textContent;
                    if (!!_txt) {
                        const _txt2 = parseInt(_txt.split('-').join(''));
                        const _class = 'c_' + _txt2;
                        i.closest('tr').classList.add(_class);
                        if (dayArry.indexOf(_txt2) == -1) {
                            dayArry.push(_txt2);
                        }
                    }
                });
                dayArry.sort(function(a, b) {
                    return a - b;
                });
                item.querySelectorAll('tbody td.m_date').forEach(i => {
                    const _txt3 = i.textContent;
                    if (!!_txt3) {
                        var _txt4 = parseInt(_txt3.split('-').join(''));
                        var _class2 = 'm_' + _txt4;
                        i.closest('tr').classList.add(_class2);
                        if (dayArry2.indexOf(_txt4) == -1) {
                            dayArry2.push(_txt4);
                        }
                    }
                });
                dayArry2.sort(function(a, b) {
                    return a - b;
                });
                item.querySelectorAll('tbody td.worker').forEach(i => {
                    var _txt5 = i.textContent;
                    if (!!_txt5) {
                        var _class3 = _txt5;
                        if (workerArry.indexOf(_txt5) == -1) {
                            workerArry.push(_txt5);
                        }
                    }
                });
                workerArry.sort(function(a, b) {
                    return a - b;
                });
                const $select = item.querySelectorAll('thead th.c_date select');
                if ($select.length) {
                    let optHtml ='';
                    for (var i in dayArry) {
                        optHtml += '<option val="' + dayArry[i] + '">' + dayArry[i] + '</option>';
                    }
                    item.querySelector('thead th.c_date select').insertAdjacentHTML('beforeend', optHtml);
                }
                const $select2 = item.querySelectorAll('thead th.m_date select');
                if ($select2.length) {
                    let optHtml ='';
                    for (var i in dayArry2) {
                        optHtml += '<option val="' + dayArry2[i] + '">' + dayArry2[i] + '</option>';
                    }
                    item.querySelector('thead th.m_date select').insertAdjacentHTML('beforeend', optHtml);
                }
                var $select3 = item.querySelectorAll('thead th.worker select');
                if ($select3.length) {
                    let optHtml ='';
                    for (var i in workerArry) {
                        optHtml += '<option val="' + workerArry[i] + '">' + workerArry[i] + '</option>';
                    }
                    item.querySelector('thead th.worker select').insertAdjacentHTML('beforeend', optHtml);
                }
            });
            const $gSelect = document.querySelectorAll('.g_board thead th select');
            $gSelect.forEach(item => {
                item.onchange = (e) => {
                    const $th = item.parentNode;
                    getSiblings($th).forEach(i => {
                        if(!i.querySelector('select') == null) i.querySelector('select').value = '';
                    });
                    const $thead = item.closest('thead');
                    const $cVal = $thead.querySelector('.c_date select').value;
                    const $mVal = $thead.querySelector('.m_date select').value;
                    const $wVal = $thead.querySelector('.worker select').value;
                    const $tbody = item.closest('.g_board').querySelector('tbody');
                    if ($cVal == '' && $mVal == '' && $wVal == '') {
                        $tbody.querySelectorAll('tr').forEach(i => {
                            i.removeAttribute('style');
                        });
                    } else {
                        $tbody.querySelectorAll('tr:not(.hr)').forEach(i => {
                            i.style.display = 'none';
                        });
                        if ($cVal != '') $tbody.querySelector(`.c_${$cVal}`).style.display = null;
                        if ($mVal != '') $tbody.querySelector(`.m_${$mVal}`).style.display = null;
                        if ($wVal != '') {
                            const $worker = $tbody.querySelectorAll('.worker');
                            $worker.forEach(i => {
                                if ($wVal === i.textContent) i.closest('tr').style.display = null;
                            });
                        }
                    }
                };
            });
        },
        state: function() {
            const $c = document.querySelectorAll('.g_content tbody .c_date');
            $c.forEach(i => {
                const h = i.innerHTML;
                const d = i.closest('tbody').querySelectorAll('.done');
                if(!h.trim() == '' || d.length) i.parentNode.classList.add('working');
            });
            const $m = document.querySelectorAll('.g_content tbody .m_date');
            $m.forEach(i => {
                const h = i.innerHTML;
                const d = i.parentNode;
                if(!h.trim() == '' || !d.classList.contains('del')) i.parentNode.classList.add('modify');
            });
            const $boardPanel = document.querySelectorAll('.g_board_panel');
            $boardPanel.forEach(function(item){
                const $no = item.querySelectorAll('table .no');
                const pageNum = $no.length;
                let $noidx = 1;
                const $tr = item.querySelectorAll('tbody tr');
                $tr.forEach(function(i, index){
                    i.querySelector('.no').textContent = index;
                });
                const $del = item.querySelectorAll('tbody tr.del');
                const delNum = $del.length;
                const $working = item.querySelectorAll('tbody tr.working');
                const ingNum = $working.length - delNum;
                let completeNum = function() {
                    let length = 0;
                    const $complete = item.querySelectorAll('tbody tr td.complete');
                    $complete.forEach(function(i){
                        if (!i.classList.contains('del') && i.querySelector('span').textContent === '완료') length += 1;
                    });
                    return length;
                };
                const per = pageNum === 0 ? 0 : Math.round((100 / pageNum) * completeNum());
                if (per === 100) Math.floor((100 / pageNum) * completeNum());
                item.querySelector('.total .num').textContent = pageNum;
                item.querySelector('.working .num').textContent = ingNum;
                item.querySelector('.cp_num .num').textContent = completeNum();
                item.querySelector('.ing .num').textContent = per;
                dataStorage.put(item, "bar-width", per);
            });
            const $noArry = document.querySelectorAll('table .no');
            const totalPageNum = $noArry.length;
            const $delArry = document.querySelectorAll('table .del');
            const totalDelPageNum = $delArry.length;
            const ingTotalNum = totalPageNum - totalDelPageNum;
            const completeTotalNum = function() {
                var length = 0;
                const $complete = document.querySelectorAll('table td.complete');
                $complete.forEach(function(i){
                    if (!i.parentNode.classList.contains('del') && i.querySelector('span').textContent === '완료') length += 1;
                });
                return length;
            };
            var perTotal = $noArry.length === 0 ? 0 : Math.round((100 / $noArry.length) * completeTotalNum());
            if (perTotal === 100) Math.floor((100 / totalpageNum) * completeTotalNum());
            document.querySelector('.g_project_status .total .num').textContent = $noArry.length;
            document.querySelector('.g_project_status .working .num').textContent = ingTotalNum;
            document.querySelector('.g_project_status .cp_num .num').textContent = completeTotalNum();
            document.querySelector('.g_project_status .ing .num').textContent = perTotal;
            document.querySelector('.g_project_status .bar').style.width = `${perTotal}%`;
        },
        UI: function() {
            const $btnResponsive = document.querySelector('.btn_responsive');
            const $idLink = document.querySelectorAll('td.id a');
            const $projectSelect = document.querySelector('.g_project .current');
            const $remark = document.querySelectorAll('.g_board .remark');
            const $project = document.querySelector('body').getAttribute('data-project');
            const $projectList = document.querySelector('.g_list');

            if(document.querySelectorAll('.btm_btn_set').length === 0) {
                const $body = document.querySelector('body');
                const $html = '<div class="btm_btn_set"><button type="button" class="btn_guide_top"><span class="offscreen">TOP</span></button><button type="button" class="btn_light_mode"><i></i><i></i><i></i><i></i><span class="offscreen">다크모드</span></button></div>';
                $body.insertAdjacentHTML('beforeend', $html);
            }

            const $gList = document.querySelectorAll('.g_project .g_list li');
            $gList.forEach(i => {
                const a = i.querySelector('a');
                if($project.charAt(0).toUpperCase() + $project.slice(1) === a.textContent) {
                    i.classList.add('active');
                    $projectSelect.textContent = a.textContent;
                }
            })

            $projectSelect.addEventListener('click', function(e) {
                e.preventDefault();
                this.classList.toggle('active');
                uiSlide.slideToggle($projectList, 500);
            });

            document.addEventListener('click', function(e) {
                if(fnClosest(e.target, '.g_project') === null) {
                    $projectSelect.classList.remove('active');
                    uiSlide.slideUp($projectList, 500);
                }
            }, false);

            const $id = document.querySelectorAll('td.id a');
            $id.forEach(i => {
                i.addEventListener('click', function(e) {
                    const $btnNewWindow = document.querySelector('.frame_device .newWindow');
                    const pID = i.textContent;
                    const $tr = i.closest('tr');
                    const pName = $tr.querySelector('td.name').textContent;
                    const url = i.getAttribute('href');
                    $tr.classList.add('active');
                    getSiblings($tr).forEach(t => {
                        t.classList.remove('active');
                    });
                    document.querySelector('.frame_device .p_id').textContent = pID;
                    document.querySelector('.frame_device .p_name').textContent = pName;
                    document.querySelector('.frame_device .head').classList.add('active');
                    setTimeout(function() {
                        document.querySelector('.frame_device .head').classList.remove('active');
                    }, 500);
                    $btnNewWindow.setAttribute('href', url);
                });
            });
            const $btnHover = document.querySelectorAll('td a.btn_hover');
            $btnHover.forEach(i => {
                i.addEventListener('mouseover', function(e) {
                    const url = i.getAttribute('href');
                    const $tr = i.closest('tr');
                    const _screenID = $tr.querySelector('td.id a').textContent;
                    const _screenName = $tr.querySelector('td.name').textContent;
                    document.querySelector('.frame_device iframe').setAttribute('src', url);
                    document.querySelector('.frame_device .newWindow').setAttribute('href', url);
                    document.querySelector('.frame_device .p_id').textContent = _screenID;
                    document.querySelector('.frame_device .p_name').textContent = _screenName;
                });
            });
            $btnResponsive.addEventListener('click', function(e) {
                workSheet.set.mToggle();
                const $frameDevice = document.querySelector('.frame_device');
                if ($frameDevice.classList.contains('pop')) {
                    document.querySelector('.g_project_status').removeAttribute('style');
                    $frameDevice.classList.remove('pop').removeAttribute('style');
                }
            });
            $remark.forEach(i => {
                i.addEventListener('click', function(e) {
                    const $clone = i.cloneNode(true);
                    let $remarkPop = '<div class="remark_pop"><h2>History</h2><div class="history"></div></div>';
                    $remarkPop += '<div class="dimmed"></div>';
                    document.querySelector('body').insertAdjacentHTML('afterend', $remarkPop);
                    document.querySelector('.remark_pop .history').appendChild($clone);
                });
            });
            document.addEventListener('click', function(e) {
                if (e.target.matches('.dimmed')) {
                    e.preventDefault();
                    document.querySelectorAll('.remark_pop, .dimmed').forEach(i => i.remove());
                }
            }, false);
        },
        slide: function() {
            const $tab = document.querySelectorAll('.g_board_tab');
            if ($tab.length > 0) {
                tabSwiper = new Swiper('.g_board_tab', {
                    slidesPerView: 'auto',
                    freeMode: true
                });
                document.querySelectorAll('.g_board_tab .swiper-slide').forEach(t => {
                    t.addEventListener('click', function(){
                        const gnbWidth = $tab.offsetWidth;
                        const offset = t.offsetWidth + t.offsetLeft + t.offsetWidth;
                        const getNodeIndex = elm => [...elm.parentNode.children].indexOf(elm);
                        (gnbWidth < offset) ? tabSwiper.slideNext(): tabSwiper.slideTo(getNodeIndex(t) - 1);
                    });
                });
                window.addEventListener('load', function(e) {
                    tabSwiper.update();
                });
            }
        },
        devicePreview: function() {
            const $currentTab = document.querySelector('.g_board_tab li.active button').textContent;
            const $panel = document.querySelectorAll('.g_board_panel');
            const $currentPanel = document.querySelector('.g_board_panel.active');
            const $firstTr = ($currentTab === '전체보기') ? $panel[0] : $currentPanel;
            const $firstLink = $firstTr.querySelectorAll('tbody a')[0];
            const _url = $firstLink.getAttribute('href');
            const _screenID = $firstLink.textContent;
            const _screenName = $firstLink.closest('tr').querySelector('.name').textContent;
            if (document.querySelectorAll('.frame_device').length === 0) {
                let $html = '';
                $html += '<div class="frame_device">';
                $html += '<div class="head">';
                $html += '<a href="' + _url + '" class="newWindow" target="_blank"><span class="offscreen">새창으로</span></a>';
                $html += '<h2><span class="p_id">' + _screenID + '</span><span class="p_name">' + _screenName + '</span></h2>';
                $html += '<button type="button" class="disconnect"><span class="offscreen">팝업으로 분리</span></button>';
                $html += '</div>';
                $html += '<div class="device">';
                $html += '<div class="btn_size_set">';
                $html += '<button type="button">320</button>';
                $html += '<button type="button">360</button>';
                $html += '<button type="button">375</button>';
                $html += '<button type="button">768</button>';
                $html += '</div>';
                $html += '<iframe src="' + _url + '" frameborder="0" name="device"></iframe>';
                $html += '</div>';
                $html += '</div>';
                document.querySelector('#gWrap').insertAdjacentHTML('afterend', $html);
            } else {
                document.querySelector('.frame_device iframe').setAttribute('src', _url);
                document.querySelector('.frame_device .p_id').textContent = _screenID;
                document.querySelector('.frame_device .p_name').textContent = _screenName;
            }
            const $btnSize = document.querySelectorAll('.btn_size_set button');
            $btnSize.forEach(i => {
                i.addEventListener('click', function(e) {
                    const $frameDevice = document.querySelector('.frame_device');
                    const deviceW = i.textContent;
                    const frameW = Number(deviceW) + 10;
                    const wrapP = Number(deviceW) + 10;
                    $frameDevice.style.width = `${frameW}px`;
                    if (!$frameDevice.classList.contains('pop')) {
                        document.querySelector('#gContainer').style.marginRight = `${wrapP}px`;
                        document.querySelector('.g_project_status').style.paddingRight = `${wrapP}px`;
                        document.querySelector('html.m .g_board_tab').style.right = `${wrapP}px`;
                        document.querySelector('html.m .panel_head').style.right = `${wrapP}px`;
                        if(document.querySelectorAll('html.m .search_title').length > 0) document.querySelectorAll('html.m .search_title').style.right = `${wrapP}px`;
                    }
                }, true);
            });
            const $disconnect = document.querySelector('.disconnect');
            const disconnectHandler = (e) => {
                workSheet.set.mToggle();
                const $frameDevice = document.querySelector('.frame_device');
                const _a = document.querySelectorAll('.g_board table tbody td.id a');
                $frameDevice.classList.toggle('pop');
                if ($frameDevice.classList.contains('pop')) {
                    $frameDevice.classList.add('pop');
                    uiDrag($frameDevice);
                    _a.forEach(i => {
                        i.setAttribute('target', 'device');
                    });
                } else {
                    document.querySelector('.g_project_status').removeAttribute('style');
                    $frameDevice.classList.remove('pop');
                    $frameDevice.removeAttribute('style');
                }
            };
            $disconnect.addEventListener('click', disconnectHandler, true);
            workSheet.set.frameResize();
        },
        searcher: function(target) {
            const $body = document.querySelector('body');
            const $bodys = document.querySelectorAll('body');
            const $gContent = document.querySelector('.g_content');
            const $thead = document.querySelectorAll('.g_content thead');
            const $tr = document.querySelectorAll('.g_content tr');
            const $searchF = document.querySelector(target);
            function keyShow() {
                removeHighlight($body);
                if ($searchF.value) highlight($bodys, $searchF.value);
                $thead.forEach(i => {
                    i.style.display = 'none';
                });
                $tr.forEach(i => {
                    i.style.display = 'none';
                });
                $('.highlight').closest('tr').show();
                if(!$gContent.classList.contains('searcher')) $gContent.classList.add('searcher');
                const $html = '<div class="search_title"><h3>검색결과</h3><button type="button" class="btn_search_cancel">검색취소</button></div>';
                if(document.querySelectorAll('.search_title').length === 0) $gContent.insertAdjacentHTML('afterbegin', $html);
            }

            function keyHide() {
                removeHighlight($body);
                $thead.forEach(i => {
                    i.removeAttribute('style');
                });
                $tr.forEach(i => {
                    i.removeAttribute('style');
                });
                $gContent.classList.remove('searcher');
                $searchF.value = '';
                $searchF.focus();
            }

            const delS = function(e) {
                const $val = $searchF.value;
                const isNext = document.querySelectorAll('.btn_search_del').length;
                const $html = '<a href="#" class="btn_search_del" role="button"><span class="offscreen">입력내용삭제</span></a>';
                if ($val != '') {
                    if(isNext === 0) $searchF.insertAdjacentHTML('afterend', $html);
                    document.querySelector('.btn_search_del').classList.add('on');
                } else {
                    if(isNext > 0) document.querySelector('.btn_search_del').remove();
                }
            }
            
            $searchF.addEventListener('keyup', delS, false);

            $searchF.addEventListener('focus', delS, false);

            $searchF.addEventListener('focusout', (e) => {
                if(document.querySelectorAll('.btn_search_del').length > 0) {
                    document.querySelector('.btn_search_del').classList.remove('on');
                    setTimeout(function() {
                        if(document.querySelectorAll('.btn_search_del').length > 0) document.querySelector('.btn_search_del').remove();
                    }, 400);
                }
            }, false);

            document.querySelector('#btnGsearch').addEventListener('click', (e) => { keyShow() });

            $searchF.addEventListener('keydown', (e) => {
                var $keyCode = e.keyCode ? e.keyCode : e.which;
                if ($keyCode == 13 && e.target.value != '') keyShow();
            });

            document.addEventListener('click', (e) => {
                if (e.target.matches('.btn_search_del, .btn_search_cancel')) keyHide();
            }, false);
        },
        frameResize: function() {
            const _wH = window.innerHeight;
            const _hH = document.querySelector('#gHeader').offsetHeight;
            const _iH = document.querySelector('.frame_device .head').offsetHeight;
            document.querySelector('.frame_device iframe').style.height = _wH - _hH - _iH - 65 + 'px';
        },
        resize: function() {
            window.addEventListener("resize", () => {
                const $hr = document.querySelectorAll('tr.hr th');
                const windowWidth = window.innerWidth;
                const $a = document.querySelectorAll('.g_board table tbody td.id a');
                if (windowWidth < 1024) {
                    $hr.forEach( i => {
                        i.setAttribute('colspan', '2');
                    });
                    $a.forEach( i => {
                        i.setAttribute('target', '_blank');
                    });
                    document.querySelector('html').classList.remove('m');
                    document.querySelector('.frame_device').removeAttribute('style');
                } else {
                    $hr.forEach( i => {
                        i.setAttribute('colspan', '13');
                    });
                }
                workSheet.set.frameResize();
            });
        },
        scroll: function() {
            window.addEventListener('scroll', () => {
                workSheet.set.btnSet();
                workSheet.set.headPixed();
            });
            window.scroll();
        },
        btnSet: function() {
            const $btmBtnSet = document.querySelector('.btm_btn_set');
            const $btnTop = document.querySelector('.btn_guide_top');
            const $btnLightMode = document.querySelector('.btn_light_mode');
            (window.scrollY > 100) ? $btmBtnSet.classList.add('active') : $btmBtnSet.classList.remove('active');
            $btnTop.addEventListener('click', () => {
                window.scrollTo({ top:0, behavior:"smooth" });
            });
            $btnLightMode.addEventListener('click', () => {
                workSheet.set.toggle_light_mode();
            });
        },
        headPixed: function() {
            const $wrap = document.querySelector('#gWrap');
            const $gHeader = document.querySelector('#gHeader');
            const $gTitle = document.querySelector('.g_titles');
            (window.scrollY > $gTitle.offsetHeight && window.innerWidth > 1024) ? $wrap.classList.add('fixed') : $wrap.classList.remove('fixed');
        },
        mToggle: function() {
            const $a = document.querySelectorAll('.g_board table tbody td.id a');
            const $device = document.querySelector('.frame_device');
            const $html = document.querySelector('html');
            if($html.classList.contains('m')) {
                $html.classList.remove('m');
                if(!$device.classList.contains('pop')) {
                    $a.forEach( i => {
                        i.setAttribute('target', '_blank');
                    });
                    $device.removeAttribute('style');
                }
                document.querySelectorAll('.g_board_tab').forEach( i => {
                    i.style.right = 0;
                });
                document.querySelectorAll('.panel_head').forEach( i => {
                    i.style.right = 0;
                });
                if(document.querySelectorAll('.search_title').length > 0) document.querySelector('.search_title').style.right = 0;
            } else {
                $html.classList.add('m');
                $a.forEach( i => {
                    i.setAttribute('target', 'device');
                });
            }
        },
        toggle_light_mode: function() {
            var app = document.querySelector('html');
            if (localStorage.lightMode == "dark") {
                localStorage.lightMode = "light";
                app.setAttribute('light-mode', 'light');
                app.classList.remove('dark');
            } else {
                localStorage.lightMode = "dark";
                app.setAttribute('light-mode', 'dark');
                app.classList.add('dark');
            }
        },
        shortcut: function() {
            let prevTargetText = null;
            const $gTarget = document.querySelectorAll('.g_target');
            const $gContent = document.querySelectorAll('.g_content');
            $gContent.forEach( i => {
                const $tar = i.querySelectorAll('tbody tr td:nth-child(5)');
                $tar.forEach(function (t, i) {
                    const $area = t.closest('.g_board_panel').querySelector('.g_target>ul');
                    const targetText = t.textContent;
                    const $row = t.parentNode;
                    const $html = '<li class="swiper-slide"><a href="#target' + i + '" class="go">' + targetText +'</a></li>';
                    if (prevTargetText == targetText || targetText == '' || $row.classList.contains('del')) return;
                    $row.setAttribute('id', 'target' + i);
                    $area.insertAdjacentHTML('beforeend', $html);
                    prevTargetText = t.textContent;
                });
            });

            $gTarget.forEach(function (tar, i) {
                targetSwiper[i] = new Swiper(tar, {
                    slidesPerView: 'auto',
                    freeMode: true
                });
                const $slideA = tar.querySelectorAll('.swiper-slide a');
                $slideA.forEach( t => {
                    t.addEventListener('click', (e) => {
                        e.preventDefault();
                        const cWidth = Math.floor(tar.offsetWidth);
                        const offset = Math.floor(t.offsetWidth + t.offsetLeft + t.offsetWidth);
                        const myIndex = Array.from($slideA).indexOf(t);
                        const targetID = t.getAttribute('href');
                        const $target = document.querySelector(targetID);
                        t.classList.add('active');
                        const $li = t.parentNode;
                        getSiblings($li).forEach( t => {
                            t.querySelector('a').classList.remove('active');
                        });
                        (cWidth < offset) ? targetSwiper[i].slideNext() : targetSwiper[i].slideTo(myIndex - 1);
                        $target.classList.add('focus');
                        setTimeout(function() {
                            $target.classList.remove('focus');
                        }, 1000);
                        window.scrollTo({ top : $target.offsetTop, behavior : "smooth" });
                    });
                });
            });
        },
        etcListChk: function() {
            document.querySelectorAll('.g_board_panel').forEach( g => {
                const $design = g.querySelectorAll('.remark li.design');
                const $plan = g.querySelectorAll('.remark li.plan');
                if ($design.length > 0) {
                    const num = $design.length;
                    const $btn = g.querySelectorAll('.btn_design');
                    const $btnSet = g.querySelector('.g_alert_btn_set');
                    $design.forEach( d => {
                        const $tr = d.closest('tr');
                        $tr.classList.add('design');
                    });
                    if (!$btn.length > 0) {
                        $btnSet.insertAdjacentHTML('beforeend', '<button type="button" class="btn_design">디자인파트에서 확인 필요한 항목이 <strong>' + num + '</strong>개 있습니다.</button>');
                    }
                }
                if ($plan.length > 0) {
                    const num = $plan.length;
                    const $btn = g.querySelectorAll('.btn_plan');
                    const $btnSet = g.querySelector('.g_alert_btn_set');
                    $plan.forEach( d => {
                        const $tr = d.closest('tr');
                        $tr.classList.add('plan');
                    });
                    if (!$btn.length > 0) {
                        $btnSet.insertAdjacentHTML('beforeend', '<button type="button" class="btn_plan">기획파트에서 확인 필요한 항목이 <strong>' + num + '</strong>개 있습니다.</button>');
                    }
                }
            });
            document.querySelectorAll('.g_alert_btn_set button').forEach( b => {
                b.addEventListener('click', (e) => {
                    const $panel = b.closest('.g_board_panel');
                    const $tr = $panel.querySelectorAll('.g_board tbody tr');
                    if(!b.classList.contains('active')) {
                        b.classList.add('active');
                        console.log(getSiblings(b).length);
                        $tr.forEach( t => {
                            const $remark = t.querySelectorAll('.remark li');
                            t.style.display = 'none';
                            if (b.classList.contains('btn_design') && t.classList.contains('design')) {
                                t.removeAttribute('style');
                                $remark.forEach( r => {
                                    r.classList.contains('design') ? r.style.display = 'block' : r.style.display = 'none';
                                });
                            } else if (b.classList.contains('btn_plan') && t.classList.contains('plan')) {
                                t.removeAttribute('style');
                                $remark.forEach( r => {
                                    r.classList.contains('plan') ? r.style.display = 'block' : r.style.display = 'none';
                                });
                            }
                        });
                    } else {
                        b.classList.remove('active');
                        $tr.forEach( t => {
                            const $remark = t.querySelectorAll('.remark li');
                            t.removeAttribute('style');
                            $remark.forEach( r => {
                                r.removeAttribute('style');
                            });
                        });
                    }
                });
            });
            if (localStorage.lightMode == "dark") {
                document.querySelectorAll('.g_board table tbody td.id a').forEach( a => {
                    a.classList.add('dark');
                });
            }
        }
    }

    function uiDrag (tar) {
        let isX = 0, isY = 0, asX = 0, asY = 0;
        if (tar.querySelector('.head')) {
            tar.querySelector('.head').onmousedown = dragMouseDown;
        } 
        else {
            tar.onmousedown = dragMouseDown;
        }
        function dragMouseDown (e) {
            e.preventDefault();
            asX = e.clientX;
            asY = e.clientY;
            document.onmouseup = destroyDrag;
            document.onmousemove = elementDrag;
        }
        function elementDrag (e) {
            e.preventDefault();
            isX = asX - e.clientX;
            isY = asY - e.clientY;
            asX = e.clientX;
            asY = e.clientY;
            tar.style.top = (tar.offsetTop - isY) + 'px';
            tar.style.left = (tar.offsetLeft - isX) + 'px';
        }
        function destroyDrag () {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

    var highlight = function(tar, pat) {
        function innerHighlight(node, pat) {
            var skip = 0;
            if (node.nodeType == 3) {
                var pos = node.data.toUpperCase().indexOf(pat);
                if (pos >= 0) {
                    var spannode = document.createElement('span');
                    spannode.className = 'highlight';
                    var middlebit = node.splitText(pos);
                    var endbit = middlebit.splitText(pat.length);
                    var middleclone = middlebit.cloneNode(true);
                    spannode.appendChild(middleclone);
                    middlebit.parentNode.replaceChild(spannode, middlebit);
                    skip = 1;
                }
            } else if (node.nodeType == 1 && node.childNodes && !/(script|style)/i.test(node.tagName)) {
                for (var i = 0; i < node.childNodes.length; ++i) {
                    i += innerHighlight(node.childNodes[i], pat);
                }
            }
            return skip;
        }
        return tar.forEach( t => {
            innerHighlight(t, pat.toUpperCase());
        });
    };

    var removeHighlight = function(tar) {
        const $hl = tar.querySelectorAll('span.highlight');
        function newNormalize(node) {
            for (var i = 0, children = node.childNodes, nodeCount = children.length; i < nodeCount; i++) {
                var child = children[i];
                if (child.nodeType == 1) {
                    newNormalize(child);
                    continue;
                }
                if (child.nodeType != 3) {
                    continue;
                }
                var next = child.nextSibling;
                if (next == null || next.nodeType != 3) {
                    continue;
                }
                var combined_text = child.nodeValue + next.nodeValue;
                new_node = node.ownerDocument.createTextNode(combined_text);
                node.insertBefore(new_node, child);
                node.removeChild(child);
                node.removeChild(next);
                i--;
                nodeCount--;
            }
        }
        return $hl.forEach( t => {
            const thisParent = t.parentNode;
            thisParent.replaceChild(t.firstChild, t);
            newNormalize(thisParent);
        });
    };

    return {
        init,
        workSheet
    }
}
window.UIGuide = new UIGuide();
window.onload = function() {window.UIGuide.init()}

window.dataStorage = {
    _storage: new WeakMap(),
    put: function (element, key, obj) {
        if (!this._storage.has(element)) {
            this._storage.set(element, new Map());
        }
        this._storage.get(element).set(key, obj);
    },
    get: function (element, key) {
        return this._storage.get(element).get(key);
    },
    has: function (element, key) {
        return this._storage.has(element) && this._storage.get(element).has(key);
    },
    remove: function (element, key) {
        var ret = this._storage.get(element).delete(key);
        if (!this._storage.get(element).size === 0) {
            this._storage.delete(element);
        }
        return ret;
    }
}

var getSiblings = function (elem) {
	var siblings = [];
	var sibling = elem.parentNode.firstChild;
	while (sibling) {
		if (sibling.nodeType === 1 && sibling !== elem) {
			siblings.push(sibling);
		}
		sibling = sibling.nextSibling
	}
	return siblings;
};

var uiSlide = {
    slideUp(target, duration) {
        target.style.transitionProperty = 'height, margin, padding';
        target.style.transitionDuration = duration + 'ms';
        target.style.boxSizing = 'border-box';
        target.style.height = target.offsetHeight + 'px';
        target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        window.setTimeout( () => {
            target.style.display = 'none';
            target.style.removeProperty('height');
            target.style.removeProperty('padding-top');
            target.style.removeProperty('padding-bottom');
            target.style.removeProperty('margin-top');
            target.style.removeProperty('margin-bottom');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
        }, duration);
    }, 
    slideDown(target, duration) {
        target.style.removeProperty('display');
        let display = window.getComputedStyle(target).display;
        if (display === 'none') display = 'block';
        target.style.display = display;
        let height = target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        target.offsetHeight;
        target.style.boxSizing = 'border-box';
        target.style.transitionProperty = "height, margin, padding";
        target.style.transitionDuration = duration + 'ms';
        target.style.height = height + 'px';
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        window.setTimeout( () => {
            target.style.removeProperty('height');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
        }, duration);
    }, 
    slideToggle(target, duration) {
        if (window.getComputedStyle(target).display === 'none') {
            return uiSlide.slideDown(target, duration);
        } else {
            return uiSlide.slideUp(target, duration);
        }
    }
}

function fnClosest(elem,selector) {
				
	/**
	 * Don't waste time looking for a bad selector
	 */
	if (selector==null||selector.length<1){
		return false;
	}
	
	/**
	 * If selector is a data attribute attempt to split the attribute from the value; there may not be a value
	 */
	function dataAttribute(selector){
		var firstChar = selector.charAt(0), attribute, value = false, supports = 'classList' in document.documentElement;
		if (firstChar==="[") {
			selector = selector.substr( 0, selector.length - 1 );
			attribute = selector.split( '=' );
			if ( attribute.length > 1 ) {
				value = true;
				attribute[1] = attribute[1].replace( /"/g, '' ).replace( /'/g, '' );
			}
			attribute[0] = attribute[0].substr(1,attribute[0].length );
      if(attribute[0].indexOf("data-")<0){ attribute[0] = "data-"+attribute[0]; }
		}
		return [firstChar,attribute,value,supports];
	}
	
	/**
	 * Internal function that does the actual finding to save time from re-running the above over and over
	 */
	function internalFind(selector,firstChar,attribute,value,supports,elem){
		while(elem!=null){
			
			/**
			 * Save the previous element or else we wont be able to make the jump to the parent
			 */
			var previous = elem;
			
			/**
			 * Only run if this is actually an HTML element
			 */
			if(elem.nodeType==1){
				// If selector is a class
				if ( firstChar === '.' ) {
					if ( supports ) {
						if ( elem.classList.contains( selector.substr(1) ) ) {
							return elem;
						}
					} else {
						if ( new RegExp('(^|\\s)' + selector.substr(1) + '(\\s|$)').test( elem.className ) ) {
							return elem;
						}
					}
				}

				// If selector is an ID
				if ( firstChar === '#' ) {
					if ( elem.id === selector.substr(1) ) {
						return elem;
					}
				}

				// If selector is a data attribute
				if ( firstChar === '[' ) {
					if ( elem.hasAttribute( attribute[0] ) ) {
						if ( value ) {
							if ( elem.getAttribute( attribute[0] ) === attribute[1] ) {
								results.add(elem);
							}
						} else {
							results.add(elem);
						}
					}
				}
				
				/**
				 * If selector is a tag
				 * We can use tagName now again becuase we check nodeType at the start
				 * nodeName is better going forward tagName is for IE 5.5
				 */
				if ( elem.nodeName.toLowerCase() === selector ) {
					return elem;
				}
			}
			
			/**
			 * Move up to next sibling if there is one or move on to the parent
			 */
			elem = elem.previousElementSibling;
			if(elem===null){ elem = previous.parentNode; }
		}
		return null;
	}
	
	holder = dataAttribute(selector);
	return internalFind(selector,holder[0],holder[1],holder[2],holder[3],elem);
}