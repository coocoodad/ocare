$(function () {
    ui.Init();
});

const ui = {
    Init: function () {
        ui.Chart.init();
        ui.Animation.init();
    }
};

ui.Chart = {
    circle: function () {
        $('[data-circle-box]').each(function () {
            const _this = $(this);
            let deg = 0;
            let $firstSize = 0;
            let $firstBgLineW = 0;
            let $firstLineW = 0;
            let strokeWidth = $(this).data('circle-width') ? parseInt($(this).data('circle-width')) : 5;
            const typeCheck = _this.data('circle-box');
            _this.addClass(typeCheck);
            _this.find('[data-circle-val]').each(function (e) {
                const idx = $(this).data('circle-val');
                const color = $(this).data('circle-color');
                const size = $(this).data('circle-size');
                const dasharray = 2 * Math.PI * (18 - strokeWidth / 2);
        
                let html = '';
                html += '<svg viewBox="0 0 36 36" class="circular-chart"';
                if (size) html += ' style="width:' + size + 'px;height:' + size + 'px;"';
                html += ' aria-hidden="true">';
                if (!e || typeCheck !== 'type2') {
                html += '<circle class="circle-bg" fill="none" stroke-width="' + strokeWidth + '" cx="18" cy="18" r="' + (18 - strokeWidth / 2) + '"></circle>';
                }
                html += '<circle';
                html += ' class="circle"';
                if (typeCheck === 'type1') {
                html += ' style="';
                html += '-webkit-animation-delay: ' + e * 0.3 + 's;';
                html += 'animation-delay: ' + e * 0.3 + 's;';
                html += '" ';
                }
                if (color) html += ' stroke="' + color + '"';
                html += ' stroke-dasharray="' + dasharray * (idx / 100) + ', ' + dasharray + '"';
                html += ' stroke-width="' + strokeWidth + '" cx="18" cy="18" r="' + (18 - strokeWidth / 2) + '"';
                html += ' />';
                html += '</svg>';
                $(this).append(html);
                if (typeCheck == 'type2') {
                    if (e) {
                        $(this)
                        .find('.circular-chart')
                        .css({ transform: 'rotate(' + 360 * (deg / 100) + 'deg)' });
                    }
                    deg += idx;
                }
                if (size) {
                    const $thisLineBg = $(this).find('.circle-bg');
                    const $thisLineBgW = parseInt($thisLineBg.css('stroke-width'));
                    const $thisLine = $(this).find('.circle');
                    const $thisLineW = parseInt($thisLine.css('stroke-width'));
                    if (!e) {
                        $firstSize = size;
                        $firstBgLineW = $thisLineBgW;
                        $firstLineW = $thisLineW;
                    } else {
                        const $ratio = $firstSize / size;
                        $thisLineBg.css('stroke-width', $firstBgLineW * $ratio);
                        $thisLine.css('stroke-width', $firstLineW * $ratio);
                    }
                }
            });
        });
    },
    init: function () {
        ui.Chart.circle();
    }
};

ui.Animation = {
    numFlip: function (target) {
        const stats = document.querySelectorAll(target);
        stats.forEach(stat => {
            const patt = /(\D+)?(\d+)(\D+)?(\d+)?(\D+)?(\d+)?(\D+)?(\d+)?(\D+)?(\d+)?(\D+)?(\d+)?(\D+)?(\d+)?(\D+)?/;
            const time = 0;
            let result = [...patt.exec(addComma(stat.textContent))];
            console.log(result);
            let fresh = true;
            let ticks;
            result.shift();
            result = result.filter(res => res != null);
            while (stat.firstChild) {
                stat.removeChild(stat.firstChild);
            }
            for (let res of result) {
                if (isNaN(res)) {
                    stat.insertAdjacentHTML("beforeend", `<span>${res}</span>`);
                } else {
                    for (let i = 0; i < res.length; i++) {
                        stat.insertAdjacentHTML(
                            "beforeend",
                            `<span data-value="${res[i]}">
                                <span>0</span>
                                ${Array(parseInt(res[i]) + 1)
                                    .join(0)
                                    .split(0)
                                    .map(
                                        (x, j) => `
                                    <span>${j}</span>
                                `
                                    )
                                    .join("")}
                            </span>`
                        );
                    }
                }
            }
            ticks = [...stat.querySelectorAll("span[data-value]")];
            let activate = () => {
                let top = stat.getBoundingClientRect().top;
                let offset = window.innerHeight * 4 / 4;
                setTimeout(() => {
                    fresh = false;
                }, time);
                if (top < offset) {
                    setTimeout(() => {
                        for (let tick of ticks) {
                            let dist = parseInt(tick.getAttribute("data-value")) + 1;
                            tick.style.transform = `translateY(-${dist * 100}%)`;
                        }
                    }, fresh ? time : 0);
                    window.removeEventListener("scroll", activate);
                }
            };
            window.addEventListener("scroll", activate);
            activate();
        });
    },
    init: function () {
        ui.Animation.numFlip('.counter');
    }
};

var addComma = function(num){
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',');
};