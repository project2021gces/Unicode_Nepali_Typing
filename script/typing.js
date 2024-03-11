const keyRowSelect = document.getElementById('keyRow');
const difficultySelect = document.getElementById('difficulty');
const levelSelect = document.getElementById('lessons');
const wordDisplay = document.getElementById("wordDisplay");
//for audio 
const erroraudio = document.getElementById("error");
const correctaudio = document.getElementById("correct");
const progressBar = document.getElementById('progressbar');

keyRowSelect.addEventListener('change', updateContent);
difficultySelect.addEventListener('change', updateContent);
levelSelect.addEventListener('change', updateContent);

function updateContent() {
    const selectedKeyRow = keyRowSelect.value;
    const selectedDifficulty = difficultySelect.value;
    const selectedLesson = levelSelect.value;
    //content according to difficulty,keyrow and lessions 
    const contentMap = {
        Introduction: {
            homekey: {
                lesson1: ["f f f f ", "j j j j ", "f f f f ", "j j j j ", "f f f f j j j j ", "f f f f j j j j ", "f f j j f f j j ", "f f j j f f j j ", "f j f j f j f j ", "f j f j f j f j "],
                lesson2: ["d d d d ", "k k k k ", "d d d d ", "k k k k ", "d d d d k k k k ", "d d d d k k k k ", "d d k k d d k k ", "d d k k d d k k ", "d k d k d k d k ", "d k d k d k d k "],
                lesson3: ["s s s s ", "l l l l ", "s s s s ", "l l l l ", "s s s s l l l l ", "s s s s l l l l ", "s s l l s s l l ", "s s l l s s l l ", "s l s l s l s l ", "s l s l s l s l "],
                lesson4: ["a a a a ", "; ; ; ; ", "a a a a ", "; ; ; ; ", "a a a a ; ; ; ; ", "a a a a ; ; ; ; ", "a a ; ; a a ; ; ", "a a ; ; a a ; ; ", "a ; a ; a ; a ; ", "a ; a ; a ; a ; "],
                lesson5: ["g g g g ", "h h h h ", "g g g g ", "h h h h ", "g g g g h h h h ", "g g g g h h h h ", "g g h h g g h h ", "g g h h g g h h ", "g h g h g h g h ", "g h g h g h g h "],
                lesson6: ["F F F F ", "J J J J ", "F F F F ", "J J J J ", "F F F F J J J J ", "F F F F J J J J ", "F F J J F F J J ", "F F J J F F J J ", "F J F J F J F J ", "F J F J F J F J "],
                lesson7: ["D D D D ", "K K K K ", "D D D D ", "K K K K ", "D D D D K K K K ", "D D D D K K K K ", "dD dD dD dD ", "kK kK kK kK ", "dD kK dD kK dD kK dD kK ", "dD kK dD kK dD kK dD kK "],
                lesson8: ["S S S S ", "L L L L ", "S S S S ", "L L L L ", "S S S S L L L L ", "S S S S L L L L ", "sS sS sS sS ", "lL lL lL lL ", "sS lL sS lL sS lL sS lL ", "sS lL sS lL sS lL sS lL "],
                lesson9: ["A A A A ", ": : : : ", "A A A A ", ": : : : ", "A A A A : : : : ", "A A A A ; ; ; ; ", "aA aA aA aA ", ";: ;: ;: ;: ", "aA ;: aA ;: aA ;: aA ;: ", "aA ;: aA ;: aA ;: aA ;: "],
                lesson10: ["G G G G ", "H H H H ", "G G G G ", "H H H H ", "G G G G H H H H ", "G G G G H H H H ", "gG gG gG gG ", "hH hH hH hH ", "gG hH gG hH gG hH gG hH ", "gG hH gG hH gG hH gG hH "],
            },
            topkey: {
                lesson1: ["r r r r ", "u u u u ", "r r r r ", "u u u u ", "r r r r u u u u ", "r r r r u u u u ", "r r u u r r u u ", "r r u u r r u u ", "r u r u r u r u ", "r u r u r u r u "],
                lesson2: ["e e e e ", "i i i i ", "e e e e ", "i i i i ", "e e e e i i i i ", "e e e e i i i i ", "e e i i e e i i ", "e e i i e e i i ", "e i e i e i e i ", "e i e i e i e i "],
                lesson3: ["w w w w ", "o o o o ", "w w w w ", "o o o o ", "w w w w o o o o ", "w w w w o o o o ", "w w o o w w o o ", "w w o o w w o o ", "w o w o w o w o ", "w o w o w o w o "],
                lesson4: ["q q q q ", "p p p p ", "q q q q ", "p p p p ", "q q q q p p p p ", "q q q q p p p p ", "q q p p q q p p ", "q q p p q q p p ", "q p q p q p q p ", "q p q p q p q p "],
                lesson5: ["t t t t ", "y y y y ", "t t t t ", "y y y y ", "t t t t y y y y ", "t t t t y y y y ", "t t y y t t y y ", "t t y y t t y y ", "t y t y t y t y ", "t y t y t y t y "],
                lesson6: ["R R R R ", "U U U U ", "R R R R ", "U U U U ", "R R R R U U U U ", "R R R R U U U U ", "rR rR rR rR ", "uU uU uU uU ", "rR uU rR rR uU rR uU rR ", "rR uU rR uU rR uU rR uU "],
                lesson7: ["E E E E ", "I I I I ", "E E E E ", "I I I I ", "E E E E I I I I ", "E E E E I I I I ", "eE eE eE eE ", "iI iI iI iI ", "eE iI eE iI eE iI eE iI ", "eE iI eE iI eE iI eE iI "],
                lesson8: ["W W W W ", "O O O O ", "W W W W ", "O O O O ", "W W W W O O O O ", "W W W W O O O O ", "wW wW wW wW ", "oO oO oO oO ", "wW oO wW oO wW oO wW oO ", "wW oO wW oO wW oO wW oO "],
                lesson9: ["Q Q Q Q ", "P P P P ", "Q Q Q Q ", "P P P P ", "Q Q Q Q P P P P ", "Q Q Q Q P P P P ", "qQ qQ qQ qQ ", "pP pP pP pP ", "qQ pP qQ pP qQ pP qQ pP ", "qQ pP qQ pP qQ pP qQ pP "],
                lesson10: ["T T T T ", "Y Y Y Y ", "T T T T ", "Y Y Y Y ", "T T T T Y Y Y Y ", "T T T T Y Y Y Y ", "tT tT tT tT ", "yY yY yY yY ", "tT yY tT yY tT yY tT yY ", "tT yY tT yY tT yY tT yY "]
            },
            bottomkey: {
                lesson1: ["v v v v ", "m m m m ", "v v v v ", "m m m m ", "v v v v m m m m ", "v v v v m m m m ", "v v m m v v m m ", "v v m m v v m m ", "v m v m v m v m ", "v m v m v m v m "],
                lesson2: ["c c c c ", ", , , , ", "c c c c ", ", , , , ", "c c c c , , , , ", "c c c c , , , , ", "c c , , c c , , ", "c c , , c c , , ", "c , c , c , c , ", "c , c , c , c , "],
                lesson3: ["x x x x ", ". . . . ", "x x x x ", ". . . . ", "x x x x . . . . ", "x x x x . . . . ", "x x . . x x . . ", "x x . . x x . . ", "x . x . x . x . ", "x . x . x . x . "],
                lesson4: ["z z z z ", "/ / / / ", "z z z z ", "/ / / / ", "z z z z / / / / ", "z z z z / / / / ", "z z / / z z / / ", "z z / / z z / / ", "z / z / z / z / ", "z / z / z / z / "],
                lesson5: ["b b b b ", "n n n n ", "b b b b ", "n n n n ", "b b b b n n n n ", "b b b b n n n n ", "b b n n b b n n ", "b b n n b b n n ", "b n b n b n b n ", "b n b n b n b n "],
                lesson6: ["V V V V ", "M M M M ", "V V V V ", "M M M M ", "V V V V M M M M ", "V V V V M M M M ", "vV vV vV vV ", "mM mM mM mM ", "vV mM vV mM vV mM vV mM ", "vV mM vV mM vV mM vV mM "],
                lesson7: ["C C C C ", "< < < < ", "C C C C ", "< < < < ", "C C C C < < < < ", "C C C C < < < < ", "cC cC cC cC ", ",< ,< ,< ,< ", "cC ,< cC ,< cC ,< cC ,< ", "cC ,< cC ,< cC ,< cC ,< "],
                lesson8: ["X X X X ", "> > > > ", "X X X X ", "> > > > ", "X X X X > > > > ", "X X X X > > > > ", "xX xX xX xX ", ".> .> .> .> ", "xX .> xX .> xX .> xX .> ", "xX .> xX .> xX .> xX .> "],
                lesson9: ["Z Z Z Z ", "? ? ? ? ", "Z Z Z Z ", "? ? ? ? ", "Z Z Z Z ? ? ? ? ", "Z Z Z Z ? ? ? ? ", "zZ zZ zZ zZ ", "/? /? /? /? ", "zZ /? zZ /? zZ /? zZ /? ", "zZ /? zZ /? zZ /? zZ /? "],
                lesson10: ["B B B B ", "N N N N ", "B B B B ", "N N N N ", "B B B B N N N N ", "B B B B N N N N ", "bB bB bB bB ", "nN nN nN nN ", "bB nN bB nN bB nN bB nN ", "bB nN bB nN bB nN bB nN "]
            },
            allkey: {
                lesson1: ["!!!! !!!! !!)) )))) )))) ))))", "!!)) !!)) !!)) !)!) !)!) !)!)", "@@@@ (((( @@@@ @@(( (((( ((((", "@@(( @@(( @@(( @(@( @(@( @(@(", "#### #### ##** **** **** ****", "##** ##** ##** #*#* #*#* #*#*", "$$$$ &&&& $$$$ $$&& &&&& &&&&", "$$&& $$&& $$&& $&$& $&$& $&$&", "%%%% %%%% %%^^ ^^^^ ^^^^", "%%^^ %%^^ %%^^ %^%^ %^%^ %^%^"],
                lesson2: ["aqaq aqaq aqaq spsp spsp spsp", "aqaq aqaq aqaq spsp spsp spsp", "dxdx dxdx dxdx e/k/ e/k/ e/k/", "dxdx dxdx dxdx e/k/ e/k/ e/k/", "(s(s (s(s (s(s !d!d !d!d !d!d", "(s(s (s(s (s(s !d!d !d!d !d!d", "pbkb pbkb pbkb t$t$ t$t$ t$t$", "pbkb pbkb pbkb t$t$ t$t$ t$t$", "*s*s *s*s *s*s zhzh zhzh zhzh", "*s*s *s*s *s*s zhzh zhzh zhzh", "wgwg wgwg wgwg dgdg dgdg dgdg", "wgwg wgwg wgwg dgdg dgdg dgdg"],
                lesson3: ["kyky kyky kyky wcwc wcwc wcwc", "kyky kyky kyky wcwc wcwc wcwc", "pgpg pgpg pgpg rgrn rgrn rgrn", "pgpg pgpg pgpg rgrn rgrn rgrn", "xnrn xnrn xnrn `t`t `t`t `t`t", "xnrn xnrn xnrn `t`t `t`t `t`t", "x/x/ x/x/ x/x/ wgdg wdgd wdgd", "x/x/ x/x/ x/x/ wgdg wdgd wdgd", "ht^t ht^t ht^t eheh eheh eheh", "ht^t ht^t ht^t erer erer erer", "drdr drdr drdr pnpn pnpn pnpn", "drdr drdr drdr pnpn pnpn pnpn"],
                lesson4: ["odkd odkd odkd %s%s %s%s %s%s", "odkd odkd odkd %s%s %s%s %s%s", "rsrs rsrs rsrs K^K^ K^K^ K^K^", "rsrs rsrs rsrs K^K^ K^K^ K^K^", "r^k^ r^k^ r^k^ n^k^ n^k^ n^k^", "r^k^ r^k^ r^k^ n^k^ n^k^ n^k^", "vnvn vnvn vnvn dndn dndn dndn", "vnvn vnvn vnvn dndn dndn dndn", "rndn rndn rndn &u&u &u&u &u&u", "rndn rndn rndn &u&u &u&u &u&u", "&d&d &d&d &d&d *d*d *d*d *d*d", "&d&d &d&d &d&d *d*d *d*d *d*d"],
                lesson5: ["hudu hudu hudu H^k^ H^k^ H^k^", "hudu hudu hudu H^k^ H^k^ H^k^", "xuxu xuxu xuxu ^d^d ^d^d ^d^d", "xuxu xuxu xuxu ^d^d ^d^d ^d^d", ";d;d ;d;d ;d;d /d/d /d/d /d/d", ";d;d ;d;d ;d;d /d/d /d/d /d/d", "#g#g #g#g #g#g egeg egeg egeg", "#g#g #g#g #g#g egeg egeg egeg", "xg'dg xg'dg xg'dg uxux uxux uxux", "xg'dg xg'dg xg'dg uxux uxux uxux", "^x^x ^x^x ^x^x jxjx jx jx", "^x^x ^x^x ^x^x jxjx jx jx"],
                lesson6: [">d>d >d>d >d>d NtNt NtNt NtNt", ">d>d >d>d >d>d NtNt NtNt NtNt", "yntn yntn yntn cndn cndn cndn", "yntn yntn yntn cndn cndn cndn", "xfxfxf xfxfxf xfxfxf xlxlxl xlxlxl xlxlxl", "xfxfxf xfxfxf xfxfxf xlxlxl xlxlxl xlxlxl", "x'x'x' x'x'x' x'x'x' x]x]x] x]x]x] x]x]x]", "x'x'x' x'x'x' x'x'x' x]x]x] x]x]x] x]x]x]", "xJxJxJ xJxJxJ xJxJxJ nfnfnf nfnfnf nfnfnf", "xJxJxJ xJxJxJ xJxJxJ nfnfnf nfnfnf nfnfnf", ";'mv b'mv ;'mv b'mv ;'mv b'mv", ";'mv b'mv ;'mv b'mv ;'mv b'mv"],
                lesson7: ["u]*fu'*l u]*fu'*l u]*fu'*l e]*faf/L e]*faf/L e]*faf/L", "u]*fu'*l u]*fu'*l u]*fu'*l e]*faf/L e]*faf/L e]*faf/L", "s]/f#f/L s]/f#f/L s]/f#f/L ;'{ ;'? ;'? ;'?", "s]/f#f/L s]/f#f/L s]/f#f/L ;'{ ;'? ;'? ;'?", "v'? v'? v'? w'?w? w'?w'? w'?w'?", "v'? v'? v'? w'?w? w'?w'? w'?w'?", "x'/l x'/l x'/l b'/L b'/L b'/L", "x'/l x'/l x'/l b'/L b'/L b'/L", "xf%lp xf%lp xf%lp xfnrfn xfnrfn xfnrfn", "xf%lp xf%lp xf%lp xfnrfn xfnrfn xfnrfn"],
                lesson8: ["cuf*l k%f*l cuf*l k%f*l cuf*l k%f*l", "cuf*l k%f*l cuf*l k%f*l cuf*l k%f*l", "AnJkfnJ AnJkfnJ AnJkfnJ dftxt dftxt dftxt", "AnJkfnJ AnJkfnJ AnJkfnJ dftxt dftxt dftxt", "kqkqlsf kqkqlsf kqkqlsf k';\\tsfno k';\\tsfno k';\\tsfno", "kqkqlsf kqkqlsf kqkqlsf k';\\tsfno k';\\tsfno k';\\tsfno", "dfofdfo dfofdfo dfofdfo e/k/ e/k/ e/k/", "dfofdfo dfofdfo dfofdfo e/k/ e/k/ e/k/", "agaf; agaf; agaf; rrfrlr' rrfrlr' rrfrlr'", "agaf; agaf; agaf; rrfrlr' rrfrlr' rrfrlr'", ],
                lesson9: ["KnK'n KnK'n KnK'n KnfgJ KnfgJ KnfgJ", "KnK'n KnK'n KnK'n KnfgJ KnfgJ KnfgJ", "afK/]afK afK/]afK afK/]afK af/af/ af/af/ af/af/", "afK/]afK afK/]afK afK/]afK af/af/ af/af/ af/af/", "eujfg eujfg eujfg e'@s^/ e'@s^/ e'@s^/", "eujfg eujfg eujfg e'@s^/ e'@s^/ e'@s^/", "e\ofu'tJ e\ofu'tJ e\ofu'tJ dudu dudu dudu", "e\ofu'tJ e\ofu'tJ e\ofu'tJ dudu dudu dudu", "C)C) C)C) C)C) x/Lx/L x/Lx/L x/Lx/L", "C)C) C)C) C)C) x/Lx/L x/Lx/L x/Lx/L"],
                lesson10: [";fdgfd /fdgfd /fdgfd utzt utzt utzt", "pOpO pOpO pOpO APAP APAP APAP", "pOpO pOpO pOpO APAP APAP APAP", "uPFuPF uPFuPF uPFuPF O;s'; O;s'; O;s';", "uPFuPF uPFuPF uPFuPF O;s'; O;s'; O;s';", "!g!g !g!g !g!g stl stl slt", "!g!g !g!g !g!g stl stl slt", "s/]nf s/]nf s/]nf sfpnl sfpnl sfpnl sfpnl", "s/]nf s/]nf s/]nf sfpnl sfpnl sfpnl sfpnl", "vfpnl vfpnl vfpnl", "APAp gAPgAp APAp gAPgAp s] u%BF", "APAp gAPgAp APAp gAPgAp s] u%BF"]
            }

        },
        Beginner: {
            homekey: {
                lesson1: ["asdfg asdfg asdfg asdfg", "asdfg asdfg asdfg asdfg", ";lkjh ;lkjh ;lkjh", ";lkjh ;lkjh ;lkjh", "asdfg hjkl; asdfg hjkl;", "asdfg hjkl; asdfg hjkl;", ";lkjh gfdsa ;lkjh gfdsa", ";lkjh gfdsa ;lkjh gfdsa"],
                lesson2: ["ad ad ad kf; kf; kf;", "ad ad ad kf; kf; kf;", "as; as; as; dfs\\;  dfs\\; dfs\\;", "as; as; as; dfs\\;  dfs\\; dfs\\;", "ddl ddl ddl s;d s;d s;d", "ddl ddl ddl s;d s;d s;d", "jh jh jh gfgf gfgf gfgf", "jh jh jh gfgf gfgf gfgf"],
                lesson3: ["jf;fgf jf;fgf jf;fgf jf;fgf", "jf;fgf jf;fgf jf;fgf jf;fgf", "af;fgf af;fgf af;fgf af;fgf", "af;fgf af;fgf af;fgf af;fgf", "d;Z d;Z d;Z d;Z", "d;Z d;Z d;Z d;Z", "gfs gfs gfs gfds gfds gfds", "gfs gfs gfs gfds gfds gfds"],
                lesson4: ["gad gad gad gad", "gad gad gad gad", ";adf ;adf ;adf ;adf", ";adf ;adf ;adf ;adf", "h;df h;df h;df h;fd h;df h;df", "a;df a;df a;df a;df", "a;df a;df a;df a;df", ";dfh ;dfh ;dfh ;dfh", ";dfh ;dfh ;dfh ;dfh", ";dfh ;dfh ;dfh ;dfh", "kgl kgl kgl kgl"],
                lesson5: ["dfgj dfgj dfgj dfgj", "dfgj dfgj dfgj dfgj", "d';'Z d';'Z d';'Z d';'Z", "d';'Z d';'Z d';'Z d';'Z", "dhfs dhfs dhfs dhfs", "dhfs dhfs dhfs dhfs", "dfdf dfdf dfdf dfdf", "dh\\hf dh\\hf dh\\hf dh\\hf", "dh\\hf dh\\hf dh\\hf dh\\hf"],
                lesson6: ["sfsf sfsL sfsf sfsL", "sfsf sfsL sfsf sfsL", "asjf; asjf; asjf; asjf;", "asjf; asjf; asjf; asjf;", ";slg ;slg ;slg ;slg", ";slg ;slg ;slg ;slg", "hLjg hLjg hLjg hLjg", "hLjg hLjg hLjg hLjg", ";fdfg ;fdfg ;fdfg ;fdfg", ";fdfg ;fdfg ;fdfg ;fdfg"],
                lesson7: ["k;lgf k;lgf k;lgf k;lgf", "k;lgf k;lgf k;lgf k;lgf", "hdlg hdlg hdlg hdlg", "hdlg hdlg hdlg hdlg", "afhf afhf afhf afhf", "afhf afhf afhf afhf", "afFsL afFsL afFsL afFsL", "afFsL afFsL afFsL afFsL", "alsals alsals alsals alsals", "alsals alsals alsals alsals"],
                lesson8: ["sa\\hf sa\\hf sa\\hf sa\\hf", "sa\\hf sa\\hf sa\\hf sa\\hf", "Asf; Asf; Asf; Asf;", "kfgLs'jf kfgLs'jf kfgLs'jf kfgLs'jf", "kfgLs'jf kfgLs'jf kfgLs'jf kfgLs'jf", "sg\\h'; sg\\h'; sg\\h'; sg\\h';", "sg\\h'; sg\\h'; sg\\h'; sg\\h';", "dghg dghg dghg dghg", "dghg dghg dghg dghg"],
                lesson9: ["d'gfKf d'gfKf d'gfKf d'gfKf", "d'gfKf d'gfKf d'gfKf d'gfKf", "ghls ghls ghls ghls", "ghls ghls ghls ghls", "gfgL gfgL aJh aJh aJh", "gfgL gfgL aJh aJh aJh", "glhLkg glhLkg glhLkg glhLkg", "glhLkg glhLkg glhLkg glhLkg", "glsf; glsf; glsf; glsf;", "glsf; glsf; glsf; glsf;"],
                lesson10: ["hafK hafK hafK hafK", "hafK hafK hafK hafK", "hfkfgL hfkfgL hfkfgL hfkfgL", "hfkfgL hfkfgL hfkfgL hfkfgL", "kdgfdf kfgfdf kfgfdf kfgfdf", "kdgfdf kfgfdf kfgfdf kfgfdf", "sd\\kgL sd\\kgL sd\\kgL sd\\kgL", "sd\\kgL sd\\kgL sd\\kgL sd\\kgL", "hg\\d hg\\d hg\\d hg\\d", "hg\\d hg\\d hg\\d hg\\d"]
            },
            topkey: {
                lesson1: ["qqqq QQQQ pppp PPPP", "qqqq QQQQ pppp PPPP", "qqQQ ppPP qqQQ ppPP", "qqQQ ppPP qqQQ ppPP", "wwww WWWW oooo OOOO", "wwww WWWW oooo OOOO", "wwWW ooOO wwWW ooOO", "wwWW ooOO wwWW ooOO", "eeee EEEE iiii IIII", "eeee EEEE iiii IIII"],
                lesson2: ["eeEE iiII eeEE iiII", "eeEE iiII eeEE iiII", "rrrr RRRR uuuu UUUU", "rrrr RRRR uuuu UUUU", "rrRR uuUU rrRR uuUU", "rrRR uuUU rrRR uuUU", "tttt TTTT yyyy YYYY", "tttt TTTT yyyy YYYY", "ttTT yyYY ttTT yyYY", "ttTT yyYY ttTT yyYY"],
                lesson3: ["qwert qwert poiuy poiuy", "qwert qwert poiuy poiuy", "trewq yuiop trewq yuiop", "trewq yuiop trewq yuiop", "```` ---- ```` ----", "```` ---- ```` ----", "1122 1122 0099 0099", "1122 1122 0099 0099", "3344 3344 8877 8877", "3344 8877 3344 8877"],
                lesson4: ["5566 5566 6655 6655", "5566 5566 6655 6655", "!!!! ____ !!!! ____", "@@@@ )))) @@@@ ))))", "@@)) @@)) @)@)", "#### (((( #### ((((", "##(( ##(( #(#(#(", "$$$$ **** $$$$ ****", "$$** $$** $*$* $*$*", "%%%% &&&& %%%% &&&&", "%%&& %%&& %&%& %&%&"],
                lesson5: ["^^^^ ^^^^ ^^&&  ^^&&", "^&*() ^&*() 152207 152207", "^&*() ^&*() 152207 152207", "8848 8848 1018 1018", "_& _& _& -rt -rt -rt", "_& _& _& -rt -rt -rt", "w[i w[i w[i u}% u}% u}%", "w[i w[i w[i u}% u}% u}%", "25089 20589 175219 175219"],
                lesson6: ["pt pt pt e]t e]t e]t", "pt pt pt e]t e]t e]t", "r@ r@ r@ ur\\r] ur\\r] ur\\r]", "r@ r@ r@ ur\\r] ur\\r] ur\\r]", "u[ u[ u[ &u & &u", "u[ u[ u[ &u & &u", "Ur Ur Ur eut eut eut", "Ur Ur Ur eut eut eut", "u[% u[% u[% t@ t@ t@", "u[% u[% u[% t@ t@ t@"],
                lesson7: ["Pp^] Pp^] Pp^] e[% e[% e[%", "Pp^] Pp^] Pp^] e[% e[% e[%", "io io io ty ty ty", "io io io ty ty ty", "w[i w[i w[i rp) rp) rp)", "w[i w[i w[i rp) rp) rp)", "rT rT rT e]* e* e]*", "rT rT rT e]* e* e]*", "e}of e}of e}of t! t! t!", "e}of e}of e}of t! t! t!"],
                lesson8: ["u)lt u)lt u)lt ut] ut] ut]", "eoJ eoJ eoJ uoJ uoJ uoJ", "rd\\rf rd\\rf rd\\rf elq elq elq", "pQ/ pQ/ pQ/ pif pif pif", "Pp^f Pp^f Pp^f I]q I]q I]q", "!ft !ft !ft", "@Qf @Qf @Qf elQf elQf", "%]p %]p %]p yLP ylP ylP", "wQ] wQ] wQ] u|u^j u|u^J u|u^J"],
                lesson9: ["@r\\%f @r\\%f @r\\%f #^fp #^fp #^fp", "%ftf %ftf %ftf %fq %fq %fq", "^f*f ^f*f ^f*f &u &u &u", "&fpF &fpF &fpF (|u (|u (|u (f* (f* (f*", "tftJ tftJ tftJ tyf tyf tyf", "tkf@ tkf@ tkf@ ysf@ ysf@ ysf@", "u)\\* u)\\* u)\\*", "oftfoft oftfoft oftfoft o]! o]! o]!"],
                lesson10: ["#*L #*L #*L %l^J %l^J %l^J", "^fpsJ ^fpsJ ^fpsJ qf; qf; qf;", "wft' wft' wft'r]tgf r]tgf r]tgf", "eTL eTL eTL r*\\sg r*\\sg r*\\sg", "w*\\sg w*\\sg w*\\sg &]ufgf &]ufgf &]ufgf", "#[tL #[tL #[tL w[tL w[tL w[tL", "_vtL _vtL -&L -&L -&L", "uLtf uLtf uLtf uon uon uon"]
            },
            bottomkey: {
                lesson1: ["vvbb vvbb vvbb bbvv bbvv bbvv", "vbvb vbvb vbvb bvbv bvbv bvbv", "vvbb vvbb vvbb bbvv bbvv bbvv", "vbvb vbvb vbvb bvbv bvbv bvbv", "ccnn ccnn ccnn nncc nncc nncc", "cncn cncn cncn ncnc ncnc ncnc", "ccnn ccnn ccnn nncc nncc nncc", "cncn cncn cncn ncnc ncnc ncnc", "xxmm xxmm xxmm mmxx mmxx mmxx", "xmxm xmxm xmxm mxmx mxmx mxmx", "xxmm xxmm xxmm mmxx mmxx mmxx", "xmxm xmxm xmxm mxmx mxmx mxmx"],
                lesson2: ["zz<< zz<< zz<< <<zz <<zz <<zz", "z<z< z<z< z<z< <z<z <z<z <z<z", "zz<< zz<< zz<< <<zz <<zz <<zz", "z<z< z<z< z<z< <z<z <z<z <z<z", "../ ././ ././ /./. /./. /./.", "../ ././ ././ /./. /./. /./.", "Vvbb Vvbb Vvbb Bbvv Bbvv Bbvv", "Ccnn Ccnn Ccnn Nncc Nncc Nncc", "Vvbb Vvbb Vvbb Bbvv Bbvv Bbvv", "Ccnn Ccnn Ccnn Nncc Nncc Nncc", "CnCn CnCn CnCn NcNc NcNc NcNc", "CnCn CnCn CnCn NcNc NcNc NcNc"],
                lesson3: ["z|sf z|sf z|sf zgl zgl zgl zglaf/", "zfvf zfvf  zfvf zlIs zlIs zlIs", "z|sf z|sf z|sf zgl zgl zgl zglaf/", "zfvf zfvf  zfvf zlIs zlIs zlIs", "xhf/ xhf/ xhf/ xh'/ xh'/ xh'/", "x/l x/l x/l x? x? x?", "xhf/ xhf/ xhf/ xh'/ xh'/ xh'/", "x/l x/l x/l x? x? x?", "xn\\nf xn\\nf xn\\nf c;n c;n c;n", "v]n v]n v]n vJnf vJnf vJnf", "xn\\nf xn\\nf xn\\nf c;n c;n c;n", "v]n v]n v]n vJnf vJnf vJnf"],
                lesson4: ["bz}| bz}| bz}| bfn bfn bfn", "b'mv b'mv b'mv b]vf b]vf b]vf", "bz}| bz}| bz}| bfn bfn bfn", "b'mv b'mv b'mv b]vf b]vf b]vf", "blbl blbl blbl nvktL nvktL nvktL", "nfe nfe nfe n]vs n]vs n]vs", "blbl blbl blbl nvktL nvktL nvktL", "nfe nfe nfe n]vs n]vs n]vs", "/sd /sd /sd /If /If /If", "/fh /fh /fh /]vb]v /]vb]v /]vb]v", "/sd /sd /sd /If /If /If", "/fh /fh /fh /]vb]v /]vb]v /]vb]v"],
                lesson5: [">dbfg >dbfg >dbfg >LdtL >LdtL >LdtL", ">dLs >dLs >dLs ?dfn ?dfn ?dfn", ">dbfg >dbfg >dbfg >LdtL >LdtL >LdtL", ">dLs >dLs >dLs ?dfn ?dfn ?dfn", "Cil Cil Cil C) C) C)", "Xof Xof Xof jlNf jlNf jlNf jlNf[yL jlNf[yL jlNf[yL", "Cil Cil Cil C) C) C)", "Xof Xof Xof jlNf jlNf jlNf jlNf[yL jlNf[yL jlNf[yL", "zx/ zx/ zx/ xb xb xb", "/x/ /x/ /x/ bvn bvn bvn", "zx/ zx/ zx/ xb xb xb", "/x/ /x/ /x/ bvn bvn bvn"],
                lesson6: ["cnz/ cnz/ cnz/ znzn znzn znzn", "x/x/ x/x/ x/x/ cxcx cxcx cxcx", "cnz/ cnz/ cnz/ znzn znzn znzn", "x/x/ x/x/ x/x/ cxcx cxcx cxcx", "z/x/ z/x/ z/x/ cnvb cnvb cnvb", "v/nc v/nc v/nc /?x? /?x? /?x?", "z/x/ z/x/ z/x/ cnvb cnvb cnvb", "v/nc v/nc v/nc /?x? /?x? /?x?", "nbzc nbzc nbzc zx/n zx/n zx/n", "cx/n cx/n cx/n Cz/C Cz/C Cz/C", "nbzc nbzc nbzc zx/n zx/n zx/n", "cx/n cx/n cx/n Cz/C Cz/C Cz/C"],
                lesson7: [">b>v >b>v >b>v Cz/C Cz/C Cz/C", ">xn? >xn? >xn? C?zb C?zb C?zb", ">xn? >xn? >xn? xldfn xldfn xldfn", "xl/J xl/J xl/J xvdgL xvdgL xvdgL", "xf[bls xf[bls xf[bls xn\\bL xn\\bL xn\\bL", "xnfnf xnfnf xnfnf xn\\sf xn\\sf xn\\sf", "xnf;g xnf;g xnf;g x>x x>x x>x", "xln xln xln x'nfs x'nfs x'nfs", "bx/ bx/ bx/ bz bz bz", "bzx/f bzx/f bzx/f bz/y bz/y bz/y", "bnlt bnlt bnlt bz[g bz[g bz[g"],
                lesson8: ["bxn bxn bxn b[zg b[zg b[zg", "/nz /nz /nz /x;\\o /x;\\o /x;\\o", "/zlof /zlof /zlof /]vf /]vf /]vf", "/b /b /b ?n/ ?n/ ?n/", "?n ?n ?n ?bf ?bf ?bf", "zZ/ zZ/ zZ/ zLtn zLtn zLtn", "zfnLs zfnLs zfnLs zfxf zfxf zfxf", "zfbfa zfbfa zfbfa z's\\n z's\\n z's\\n", "z'n\\s z'n\\s z'n\\s z'vb z'vb z'vb", "vBx vBx vBx vfN vfN vfN", "v/lb v/lb v/lb v'zL v'zL v'zL", "zn\\tL zn\\tL zn\\tL vn\\nJ vn\\nJ vn\\nJ"],
                lesson9: ["cxd cxd cxd cnv cnv cnv", "cbfnt cbfnt cbfnt cvJ^ cvJ^ cvJ^", "cvln cvln cvln cNtt cNtt cNtt", "cZn cZ cZn bZg bZg bZg", "nZL nZL nZL nZf nZf nZf", "nJx nJx nJx zJs zJs zJs", "zJ/f zJ/f zJ/f cvln cvln cvln", "Vsf/ Vsf/ Vsf/ Xk\\kL Xk\\kL Xk\\kL", "Z[d Z[d Z[d /fI; /fI; /fI;", "b[g b[g b[g zs\\tl zs\\tl zs\\tl", "c? c? c? za\\b za\\b za\\b", "/f/f /f/f /f/f z/L/ z/L/ z/L/", "zn\\o zn\\o zn\\o zf/bL zf/bL zf/bL"],
                lesson10: ["xnZ xnZ xnZ xnrn xnrn xnrn", "xf/ xf/ xf/ xf[b xf[b xf[b", "xfnt xfnt xfnt xlZ xlZ xlZ", "vfFb vfFb vfFb vf/l vf/l vf/l", "v'bJ v'bJ v'bJ v'?Z v'?Z v'?Z", "ck/f ck/f ck/f c/v c/v c/v", "cnrlnJ cnrlnJ cnrlnJ cnkZf cnkZf cnkZf", "b|zg b|zg b|zg bdfxf bdfxf bdfxf", "b/fn b/fn b/fn b/lnJ b/lnJ b/lnJ", "bnbn] bnbn] bnbn] bnfxf bnfxf bnfxf", "bzfc bzfx bzfx bfX bfX bfX", "bfxlg] bfxlg] bfxlg] b'm>j b'm>j b'm>j"]
            },
            allkey: {
                lesson1: ["!!!! !!!! !!)) )))) )))) ))))", "!!)) !!)) !!)) !)!) !)!) !)!)", "@@@@ (((( @@@@ @@(( (((( ((((", "@@(( @@(( @@(( @(@( @(@( @(@(", "#### #### ##** **** **** ****", "##** ##** ##** #*#* #*#* #*#*", "$$$$ &&&& $$$$ $$&& &&&& &&&&", "$$&& $$&& $$&& $&$& $&$& $&$&", "%%%% %%%% %%^^ ^^^^ ^^^^", "%%^^ %%^^ %%^^ %^%^ %^%^ %^%^"],
                lesson2: ["aqaq aqaq aqaq spsp spsp spsp", "aqaq aqaq aqaq spsp spsp spsp", "dxdx dxdx dxdx e/k/ e/k/ e/k/", "dxdx dxdx dxdx e/k/ e/k/ e/k/", "(s(s (s(s (s(s !d!d !d!d !d!d", "(s(s (s(s (s(s !d!d !d!d !d!d", "pbkb pbkb pbkb t$t$ t$t$ t$t$", "pbkb pbkb pbkb t$t$ t$t$ t$t$", "*s*s *s*s *s*s zhzh zhzh zhzh", "*s*s *s*s *s*s zhzh zhzh zhzh", "wgwg wgwg wgwg dgdg dgdg dgdg", "wgwg wgwg wgwg dgdg dgdg dgdg"],
                lesson3: ["kyky kyky kyky wcwc wcwc wcwc", "kyky kyky kyky wcwc wcwc wcwc", "pgpg pgpg pgpg rgrn rgrn rgrn", "pgpg pgpg pgpg rgrn rgrn rgrn", "xnrn xnrn xnrn `t`t `t`t `t`t", "xnrn xnrn xnrn `t`t `t`t `t`t", "x/x/ x/x/ x/x/ wgdg wdgd wdgd", "x/x/ x/x/ x/x/ wgdg wdgd wdgd", "ht^t ht^t ht^t eheh eheh eheh", "ht^t ht^t ht^t erer erer erer", "drdr drdr drdr pnpn pnpn pnpn", "drdr drdr drdr pnpn pnpn pnpn"],
                lesson4: ["odkd odkd odkd %s%s %s%s %s%s", "odkd odkd odkd %s%s %s%s %s%s", "rsrs rsrs rsrs K^K^ K^K^ K^K^", "rsrs rsrs rsrs K^K^ K^K^ K^K^", "r^k^ r^k^ r^k^ n^k^ n^k^ n^k^", "r^k^ r^k^ r^k^ n^k^ n^k^ n^k^", "vnvn vnvn vnvn dndn dndn dndn", "vnvn vnvn vnvn dndn dndn dndn", "rndn rndn rndn &u&u &u&u &u&u", "rndn rndn rndn &u&u &u&u &u&u", "&d&d &d&d &d&d *d*d *d*d *d*d", "&d&d &d&d &d&d *d*d *d*d *d*d"],
                lesson5: ["hudu hudu hudu H^k^ H^k^ H^k^", "hudu hudu hudu H^k^ H^k^ H^k^", "xuxu xuxu xuxu ^d^d ^d^d ^d^d", "xuxu xuxu xuxu ^d^d ^d^d ^d^d", ";d;d ;d;d ;d;d /d/d /d/d /d/d", ";d;d ;d;d ;d;d /d/d /d/d /d/d", "#g#g #g#g #g#g egeg egeg egeg", "#g#g #g#g #g#g egeg egeg egeg", "xg'dg xg'dg xg'dg uxux uxux uxux", "xg'dg xg'dg xg'dg uxux uxux uxux", "^x^x ^x^x ^x^x jxjx jx jx", "^x^x ^x^x ^x^x jxjx jx jx"],
                lesson6: [">d>d >d>d >d>d NtNt NtNt NtNt", ">d>d >d>d >d>d NtNt NtNt NtNt", "yntn yntn yntn cndn cndn cndn", "yntn yntn yntn cndn cndn cndn", "xfxfxf xfxfxf xfxfxf xlxlxl xlxlxl xlxlxl", "xfxfxf xfxfxf xfxfxf xlxlxl xlxlxl xlxlxl", "x'x'x' x'x'x' x'x'x' x]x]x] x]x]x] x]x]x]", "x'x'x' x'x'x' x'x'x' x]x]x] x]x]x] x]x]x]", "xJxJxJ xJxJxJ xJxJxJ nfnfnf nfnfnf nfnfnf", "xJxJxJ xJxJxJ xJxJxJ nfnfnf nfnfnf nfnfnf", ";'mv b'mv ;'mv b'mv ;'mv b'mv", ";'mv b'mv ;'mv b'mv ;'mv b'mv"],
                lesson7: ["u]*fu'*l u]*fu'*l u]*fu'*l e]*faf/L e]*faf/L e]*faf/L", "u]*fu'*l u]*fu'*l u]*fu'*l e]*faf/L e]*faf/L e]*faf/L", "s]/f#f/L s]/f#f/L s]/f#f/L ;'{ ;'? ;'? ;'?", "s]/f#f/L s]/f#f/L s]/f#f/L ;'{ ;'? ;'? ;'?", "v'? v'? v'? w'?w? w'?w'? w'?w'?", "v'? v'? v'? w'?w? w'?w'? w'?w'?", "x'/l x'/l x'/l b'/L b'/L b'/L", "x'/l x'/l x'/l b'/L b'/L b'/L", "xf%lp xf%lp xf%lp xfnrfn xfnrfn xfnrfn", "xf%lp xf%lp xf%lp xfnrfn xfnrfn xfnrfn"],
                lesson8: ["cuf*l k%f*l cuf*l k%f*l cuf*l k%f*l", "cuf*l k%f*l cuf*l k%f*l cuf*l k%f*l", "AnJkfnJ AnJkfnJ AnJkfnJ dftxt dftxt dftxt", "AnJkfnJ AnJkfnJ AnJkfnJ dftxt dftxt dftxt", "kqkqlsf kqkqlsf kqkqlsf k';\\tsfno k';\\tsfno k';\\tsfno", "kqkqlsf kqkqlsf kqkqlsf k';\\tsfno k';\\tsfno k';\\tsfno", "dfofdfo dfofdfo dfofdfo e/k/ e/k/ e/k/", "dfofdfo dfofdfo dfofdfo e/k/ e/k/ e/k/", "agaf; agaf; agaf; rrfrlr' rrfrlr' rrfrlr'", "agaf; agaf; agaf; rrfrlr' rrfrlr' rrfrlr'", ],
                lesson9: ["KnK'n KnK'n KnK'n KnfgJ KnfgJ KnfgJ", "KnK'n KnK'n KnK'n KnfgJ KnfgJ KnfgJ", "afK/]afK afK/]afK afK/]afK af/af/ af/af/ af/af/", "afK/]afK afK/]afK afK/]afK af/af/ af/af/ af/af/", "eujfg eujfg eujfg e'@s^/ e'@s^/ e'@s^/", "eujfg eujfg eujfg e'@s^/ e'@s^/ e'@s^/", "e\ofu'tJ e\ofu'tJ e\ofu'tJ dudu dudu dudu", "e\ofu'tJ e\ofu'tJ e\ofu'tJ dudu dudu dudu", "C)C) C)C) C)C) x/Lx/L x/Lx/L x/Lx/L", "C)C) C)C) C)C) x/Lx/L x/Lx/L x/Lx/L"],
                lesson10: [";fdgfd /fdgfd /fdgfd utzt utzt utzt", "pOpO pOpO pOpO APAP APAP APAP", "pOpO pOpO pOpO APAP APAP APAP", "uPFuPF uPFuPF uPFuPF O;s'; O;s'; O;s';", "uPFuPF uPFuPF uPFuPF O;s'; O;s'; O;s';", "!g!g !g!g !g!g stl stl slt", "!g!g !g!g !g!g stl stl slt", "s/]nf s/]nf s/]nf sfpnl sfpnl sfpnl sfpnl", "s/]nf s/]nf s/]nf sfpnl sfpnl sfpnl sfpnl", "vfpnl vfpnl vfpnl", "APAp gAPgAp APAp gAPgAp s] u%BF", "APAp gAPgAp APAp gAPgAp s] u%BF"]
            },
            allkey: {
                lesson1: ["cdnf cdnf cdnf c;n c;n c;n", "cdg cdg cdg cxd cxd cxd", "cr]t cr]t cr]t crfgJ crfgJ crfgJ", "crf/ crf/ crf/ csn csn csn", "cd]/lsf cd]/lsf cd]/lsf c&J^ c&J^ c&J^", "cnlvlt cnlvlt cnlvlt cdfgjLo cdfgjLo cdfgjLo", "cnlstl cnlstl cnlstl cg'udg cg'udg cg'udg", "cnjlb cnljb cnjlb Ak Ak Ak",
                    "Ab/ Ab/ Ab/ Aw'gls Aw'gls Aw'gls", "Azf Azf Azf A/d A/d A/d", "A;g A;g A;g Anlzfg Anlzfg Anlzfg", "Ajfh Ajfh Ajfh Ap Ap Ap", "Asfz Asfz Asfz Abl Abl Abl", "Axf Axf Axf Adf Adf Adf", "Avf Avf Avf Anf Anf Anf", "AOtaf/ AOtaf/ AOtaf/ Apg' Apg' Apg'", "Ar/) Ar/) Ar/) A? A? A?",
                    "O/fbf O/fbf O/fbf Otl Otl Otl", "OFhf/ Ofhf/ OFhf/ OF^f OF^f OF^f", "Os/f/ Os/f/ Os/f/ Os\\/f Os\\/f Os\\/f", "OI' OI' OI' OI'dtL OI'dtL OI'dtL", "OI\\jfs' OI\\jfs OI\\jfs Ovfn' Ovfn' Ovfn'", "Ov\\ofpg' Ov\\ofpg' Ov\\ofpg' Or\\%feJhg Or\\%feJhg Or\\%feJhg", "Or\\%lt Or\\%lt Or\\%lt Ohxf/ Ohxf/ Ohxf/",
                    "@r\\%f @r\\%f @r\\%f @y/ @y/ @y/", "@tlxf; @tlxf; @tlxf; @nd @nd @nd", "@gf/ @gf/ @gf/ @nfd @nfd @nfd", "@dfg\\bf/ @dfg\\bf/ @dfg\\bf/ @k\\;f @k\\;f @k\\;f", "@g\\b\\/ @g\\b\\/ @g\\b\\/ @[i\\of @[i\\of @[i\\of", "@zfg @zfg @zfg @;f@ @;f@ @;f@", "@it\ @it\ @it\ @xf @xf @xf"
                ],
                lesson2: ["pFufO pFufO pFufO pFrfO pFrfO pFrfO", "pF^ pF^ pF^ pFwBnL pFwBnL pFwBnL", "psf/ psf/ psf/ psfn\\g' psfn\\g' psfn\\g'", " psfnfO psfnfO psfnfO psfnL psfnL psfnL", "psf; psf; psf; pvfg pvfg pvfg", "pu\\/tf pu\\/tf pu\\/tf pu\\ng' pu\\ng' pu\\ng'", "pr\\r;\\t/Lo pr\\r;\\t/Lo pr\\r;\\t/Lo p^fg p^fg p^fg",
                    "U[h U[h U[h U? U? U?", "Uif Uif Uif Ui\\df Ui\\df Ui\\df", "UgL UgL UgL UFrJ UFrJ UFrj", "Ui/ Ui/ Ui/ Crf Crf Crf", "C) C) C) Ct Ct Ct", "Ct' Ct' Ct' Cie Cie Cie", "Cil Cil Cil Ci\\o Ci\\o Ci\\o",
                    "Pp^f Pp^f Pp^f Ps Ps Ps", "Psrfnl; Psrfnl; Psrfnl; Ps%q Ps%q Ps%q", "Ps%fs Ps%fs Ps%fs PshfO PshfO PshfO", "PshftLo PshftLo PshftLo Pstg\\q Pstg\\q Pstg\\q", "Pstf Pstf Pstf Psbd Psbd Psbd", "Psbn Psbn Psbn Psgf; Psgf; Psgf;", "Pskf&L Pskf&L Pskf&L Pskt\\gL Pskt\\gL Pskt\\gL",
                    "Etlxf;ls Etlxf;ls Etlxf;ls Eg Eg Eg", "E^g E^g E^g Esf/ Esf/ Esf/", "Ehg Ehg Ehg Ekg Ekg Ekg", "Egf Egf Egf Eef/f Eef/f Eef/f", "Eof/L Eof/L Eof/L E/]n' E/]n' E/]n'", "EnfgL EnfgL EnfgL E;L E;L E;L", "En' En' En' E;A/fd E;A/fd E;A/fd", "ExnBsls ExnBsls ExnBsls Exls Exls Exls"
                ],
                lesson3: ["_O _O _O _O/g' _O/g' _O/g'", "_O/fg _O/fg _O/fg _sn\\g' _sn\\g' _sn\\g'", "_sf/ _sf/ _sf/ _vtL _vtL _vtL", "_v/ _v/ _v/ _vn _vn _vn", "_hg _hg _hg _Hf _Hf _Hf", "_^lnJ _^lnJ _^lnJ _*f/ _*f/ _*f/", "_t _t _t _y/f _y/f _y/f", "_bfg _bfg _bfg _wfg _wfg _wfg",
                    "-F&f -F&f -F&f -F/J -F/J -F/J", "-F;L -F;L -F;L  -sft -sft -sft", "-rlt\\o -rlt\\o -rlt\\o -h; -h; -h; -hf/ -hf/ -hf/", "-^f -^f -^f -tf/ -tf/ -tf/", "-krf/ls -krf/ls -krf/ls -/; -/; -/;", "-n -n -n -nfb -nfb -nfb", "-iw -iw -iw -iwfno -iwfno"
                ],
                lesson4: ["ssgL ssgL ssgL ss; ss; ss;", "sI sI sI sv/f sv/f sv/f", "srlnJ srlnJ srlnJ sr'jf sr'jf sr'jf", "s&dxn s&dxn s&dxn stf/ stf/ stf/", "sQn sQn sQn sQlsJ sQlsJ sQlsJ", "syfsyg syfsyg syfsyg sbd sbd sbd", "sgskq sgskq sgskq sgrl/f sgrl/f sgrl/f", "sdf; sdf; sdf; sa\\hf sa\\hf sa\\hf",
                    "vhlt vhlt vhlt vhfgf vhfgf vhfgf", "v^fO v^fO v^fO v)\\*g v)\\*g v)\\*g", "v]t v]t v]t vtd vtd vtd", "vghJt vghJt vghjt vfhf vfhf vfhf", "va/bf/ va/bf/ va/bf/ vdf/L vdf/L vdf/L", "v/foJ v/foJ v/foJ vnf;L vnf;L vnf;L", "vftf vftf vftf vfgL vfgL vfgL",
                    "uugrf/L uugrf/L uugrf/L uun uun uun", "uhs uhs uhs uhaf/ uhaf/ uhaf/", "u&g u&g u&g u*u* u*u* u*u*", "u)tg\\q u)tg\\q u)tg\\q u)gf u)gf u)gf", "utfut utfut utfut ug\\tj\\o ug\\tj\\o ug\\tj\\o", "uxgf uxgf uxgf unt unt unt", "unag\\bL unag\\bL unag\\bL unn\\n unn\\n unn\\n", "ufpF ufpF ufpF ufhn ufhn ufhn",
                    "#/ #/ #/ #r\\rf #r\\rf #r\\rf", "#^lof #^lof #^lof #*L #*L #*L", "#tgf #tgf #tgf #[ilt #[ilt #[ilt", "#fF^L #fF^L #fF^L #fts #fts #fts", "#lrfpg' #lrfpg' #lrfpg' #';#';] #';#';] #';#';],", "#Jk\\^] #Jk\\^] #Jk\\^] #J/t/ #J/t/ #J/t/",
                    "<sf/ <sf/ <sf/ <[/ <[/ <[/", "<l;lZ <l:lZ <l;lZ <\\ofZ <\\ofZ <\\ofZ", " <Jkf <Jkf <Jkf <]s'afhf <]s'afhf <]s'afhf", "<f/<'/ <f/<'/ <f/<'/ <'k\\n'Z <'k\\n'Z <'k\\n'Z"
                ],
                lesson5: ["rsn]^L rsn]^L rsn]^L rZf rZf rZf", "rv]jf rv]jf rv]jf r`\\rn r`\\rn r`\\rn", "rg\\b\\/jlg\\b' rg\\b\\/jlg\\b' rg\\b\\/jlg\\b' rk/f;L rk/f;L rk/f;L", "rfFbgL rfFbgL rfFbgL rf*k[j rf*k[j rf*k[j", "rfxfgf rfxfgf rfxfgf rlslt\\;s rlslt\\;s rlslt\\;s", "rl^ rl^ rl^ rl&L rl&L rl&L", "rlghfg rlghfg rlghfg r]s r]s r]s",
                    "%s%s] %s%s] %s%s] %sfxf %sfxf %sfxf", "%^fOF %^fOF %^fOF %qkq %qkq %qkq", " %fqf %fqf %fqf %n\\sJ %n\\sJ %n\\sJ", "%fkbfgL %fkbfgL %fkbfgL %fof %fof %fof", "%lgfKfgf %lgfKfgf %lgfKfgf %'g'd'g' %'g'd'g' %'g'd'g'", "%'[kL %'[kL %'[kL %]sf%]s %]sf%]s %]sf%]s", "%}^L %}^L %}^L %J/La]^L %J/La]^L %J/La]^L",
                    "hu hu hu hvdL vdL hvdL", "hgtf hgtf hgtf hg/If hg/If", "hg\\dlg' hg\\dlg' hg\\dlg' hfFu/ hfFu/ hfFu/", "hlpkfnJ hlpkfnJ hlpkfnJ hln\\nf hln\\nf hln\\nf", "hLjgsnf hLjgsnf hLjgsnf h'ufb h'ufb h'ufb", "h'/]nL h'/]nL h'/]nL hJs/ hJs/ hJs/", "hJ;lnJ hJ;lnJ hJ;lnJ h\\ofg h\\ofg h\\ofg", "h\\jfnf h\\jfnf h\\jfnf hJ*f hJ*f hJ*f",
                    "Hu*f Hu*f Hu*f Htf/J Htf/J Htf/J", "HkZ HkZ HkZ Hfkf HfKf Hfkf", "Hlhlg' Hlhlg' Hlhlg' HlgJ HlgJ HlgJ", "H'qJ H'qJ H'qJ H'd\\s] H'd\\s] H'd\\s]", "HJs HJs HJs HJk*L HJk*L HJk*L", "H\\o/] H\\o/] H\\o/] H\\ofd\\d H\\ofd\\d H\\ofd\\d", "H]n H]n H]n H]pjf H]pjf H]pjf",
                    "`sf/ `sf/ `sf/ `sf/ `sf/"
                ],
                lesson6: ["^s^s ^s^s ^s^s ^gf^g ^gf^g ^gf^g", "^gs ^gs ^gs ^k ^k ^k", "^fOd ^fOd ^fOd ^fpsJ ^fpsJ ^fpsJ", "^ls^ ^ls^ ^ls^ ^lsJ ^lsJ ^lsJ", "^'s^'s ^'s^'s ^'s^'s ^]a'n ^]a'n ^]a'n", "^Jk ^Jk ^Jk ^JkL ^JkL ^JkL", "^\\/;\\^ ^\\/;\\^ ^\\/;\\^ ^fo/ ^fo/ ^fo/", '^"^ ^"^ ^"^ ^/fO ^/fO ^/fO',
                    "&Z/ &Z/ &Z/ &u &u &u", "&fF^L &fF^L &fF^L &fs'/ &fs'/ &fs'/", "&fgf &fgf &Fgf  &ls &ls &ls", "&'^J &'^J &'^J &'nL &'nL &'nL", "&]pjf &]pjf &]pjf &]sfO &]sfO &]sfO", "&]; &]; &]; &J; &J; &J;", "&]ufgf &]ufgf &]ufgf &l^f &l^f &l^f",
                    "*F*]nJ *F*]nJ *F*]nJ *s[dL *s[dL *s[dL", "*udu *udu *udu *an *an *an", "*fFsJ *fFsJ *fFsJ *fo/L *fo/L *fo/L", "*lu\\/L *lu\\/L *lu\\/L *lg *lg *lg", "*'afO *'afO *'afO *'n\\g' *'n\\g' *'n\\g'", "*]p(f *]p(f *]p(f *]/f *]/f *]/f", "*JsJ *JsJ *JsJ *JnfhL *JnfhL *jnfhL",
                    "(sgL (sgL (sgL (Zf (Zf (Zf", "(*lof (*lof (*lof (kfO (kfO (kfO", "(fFrf (fFrf (fFrf (fsf (fsf (fsf", "(lnfO (lnfO (lnfO (l;\\sJ (l;\\sJ (l;\\sJ", "('sgf ('sgf ('sgf ('s'^L ('s'^L ('s'^L", "('s'/ ('s'/ ('s'/ (]/ (]/ (]/", "(Jsf (Jsf (Jsf (Ju (Ju (Ju"
                ],
                lesson7: ["ts/f/ ts/f/ ts/f/ tslof tslof tslof", "tvt tvt tvt tyfgfd tyfgfd tyfgfd", "tfsf tfsf tfsf tfut tfut tfut", "tltJ tltJ tltJ tlh tlh tlh", "tldL tldL tldL tl/dl/ tl/dl/ tl/dl/", "tLgtf/] tLgtf/] tLgtf/] tLgkfg] tLgkfg] tLgkfg]", "t'Zf t'Zf t'Zf t]hlnJ t]hlnJ t]hlnJ",
                    "ysfnL ysfnL ysfnL yrZ yrZ yrZ", "yfkf yfkf yfkf yftL yftL yftL", "yfdk'/ yfdk'/ yfdk'/ ylrJdlrJ ylrJdlrJ ylrJdlrJ", "y's'Z y's'Z y's'Z y'kf[g' y'kf[g' y'kf[g'", "y]ue/ y]ue/ y]ue/ y]uJ y]uJ y]uJ", "yJqJ yJqJ yJqJ yJkJ yJkJ yJkJ", "y\\ofr\\r y\\ofr\\r y\\ofr\\r y\\jfQ y\\jfQ y\\jfQ",
                    "btf/ btf/ btf/ bIl) bIl) bIl)", "bvn bvn bvn b'mv b'mv b'mv", "bQs bQs bQs bfpg bfpg bfpg", "bfh'efO bfh'efO bfh'efO blZt blZt blZt", "blbL blbL blbL blg blg blg", "bldfu bldfu bldfu bLks bLks bLks", "bL[#sfnLg bL[#sfnLg bL[#sfnLg b'O^f b'O^f b'O^f",
                    "wsws wsws wsws ws]n\\g' ws]n\\g' ws]n\\g'", "w*\\sg w*\\sg w*\\sg wfpgL wfpgL wfpgL", "wfskfs wfskfs wfskfs wfqL wfqL wfqL", "wlt wlt wlt wli)f wli)f wli)f", "wLdf wLdf wLdf wLj/ wLj/ wLj/", " w'g' w'g' w'g' w'hf w'hf w'hf", 'w"dwfd w"dwfd w"dwfd w"dlt w"dlt w"dlt', "wJsJ wJsJ wJsJ wJqlg' wJqlg' wJqlg'",
                    "gsn gsn gsn gsfa gsfa gsfa", "gv/f gv/f gv/f gfua]nL gfua]nL gfua]nL", "gfu/ls gfu/ls gfu/ls glmza\\b glmza\\b glmza\\b", "glmz'n\\s glmz'n\\s glmz'n\\s glsn glsn glsn", "gLn;/ gLn;/ gLn;/ gLjf/ gLjf/ gLjf/", "g'jfuL g'jfuL g'jfuL g'gt]n g'gt]n g'gt]n", "g]kfn g]kfn g]kfn gJs/L gJs/L gJs/L"
                ],
                lesson8: ["kZ kZ kZ ksf/ ksf/ ksf/", "kfFr kfFr kfFr kfOvfgf kfOvfgf kfOvfgf", "klpg klpg klpg klkn' klkn' klkn'", "k'sf/ k'sf/ k'sf/ k'r\\%/ k'r\\%/ k'r\\%/", 'k"[jsf k"[jsf k"[jsf k"; K"; k";', "k{yf k{yf k{yf k{i\\&ufdL k{i\\&ufdL k{i\\&ufdL", "k[=oJ k[=oJ k[=oJ k/k[=ofO k/k[=ofO k/k[=ofO k/k[=ofO", "k\\/tldfg k\\/tldfg k\\/tldfg k\\/tl/Jw k\\/tl/Jw k\\/tl/Jw",
                    "Ks*f Ks*f Ks*f Ksf/ Ksf/ Ksf/", "KfF^ KfF^ KfF^ KfObf kfObf KfObf", "Kl/Jh Kl/Jh Kl/Jh KlnJ KlnJ KlnJ", "K'Zf K'Zf K'Zf K'rfK'rL K'rfK'rL K'rfK'rL", 'K"nh*L K"nh*L K"nh*L K"naf/L K"naf/L K"naf/L', "K]bL K]bL k]bL K];g K];g K];g", "KJ^J KJ^J KJ^J KJ/fO KJ/fO KJ/fO",
                    "asd asd asd abt abt abt", "afF;#f/L afF;#f/L afF;#f/L afujfg afujfg afujfg", "alwf alwf alwf alr/J alr/J alr/J", "algfoJ algfoJ algfoJ alkgf alkgf alkgf", "a'sL a'sL a'sL a'Hfp a'Hfp a'Hfp", "a'Qf a'Qf a'Qf a]sfd a]sfd a]sfd", "aB/f aB/f aB/f aB;\\of aB;\\of aB;\\of",
                    "esf/L esf/L esf/L e^fe^ e^fe^ e^fe^", "efif efif efif efu\\odfgL efu\\odfgL efu\\odfgL", "elQJ elQJ elQJ eLi\\d eLi\\d eLi\\d", "e'Fj/L e'Fj/L e'Fj/L e'd/L e'd/L e'd/L", 'e"dlut e"dlut e"dlut e"i) e"i) e"i)', "e]befj e]befj e]befj e]nf e]nf e]nf", "e}/jLo e}/jLo e}/jLo eJhg eJhg eJhg",
                    "dnfO dnfO dnfO dug dug dug", "dftf dftf dftf dfq} dfq} dfq}", "dlqtf dlqtf dlqtf dLng dLng dLng", "d'v]gL d'v]gL d'v]gL d'*\\sL d'*\\sL d'*\\sL", "d]xgtL d]xgtL d]xgtL d}gf d}gf d}gf", "dJ^/;fOsn dJ^/;fOsn dJ^/;fOsn dBsf dBsf dBsf", "d\\ofb d\\ofb d\\ofb dw\\otf dw\\otf dw\\otf"
                ],
                lesson9: ["obl obl obl og\\q og\\q og\\q", "o;/L o;/L o;/L oftfoft oftfoft oftfoft", "o'/lof o'/lof o'/lof o'jf o'jf o'jf", "oJubfg oJubfg oJubfg oJhgf oJhgf oJhgf", "o'un o'un o'un ofrgf ofrgf ofrgf",
                    "/sd /sd /sd /Ifbn /Ifbn /Ifbn", "/fhf/fgL /fhf/fgL /fhf/fgL /fOtf /fOtf /fOtf", "/fi\\^\\/lo /fi\\^\\/lo /fi\\^\\/lo /lvL /lvL /lvL", "?vkft ?vkft ?vkft ?klofF ?klofF ?klofF", "/]s* /]s* /]s* /Jhuf/L /Jhuf/L /Jhuf/L", "/Bgs /Bgs /Bgs [=ofnL [=ofnL [=ofnL", "[=ofs [=ofs [=ofs [=ofn\\n [=ofn\\n [=ofn\\n",
                    "nI)f nI)f nI)f nvg nvg nvg", "nfvfkfvf nfvfkfvf nfvfkfvf nfuL nfuL nfuL", "nlvt nlvt nlvt nlrL nlrL nlrL", "n'uf n'uf n'uf n'd\\algL n'd\\algL n'd\\algL", "n]vfO n]vfO n]vfO nJstg\\q nJstg\\q nJstg\\q", "nJs;]jf nJs;]jf nJs;]Jf nBg nBg nBg",
                    "jsln jsln jsln j|z j|z j|z", "jfs\\o jfs\\o jfs\\o jfrg jfrg jfrg", "jftfj/) jftfj/) jftfj/) jlsnf jlsnf jlsnf", "jlsf; jlsf; jlsf; j{Qs/ j{Qs/ j{Qs/", "j{in j{in j{in j]blsf j]blsf j]blsf", "j}sn\\k j}sn\\k j}sn\\k j}!fgls j}!fgls j}!fgls", "j\\oj;\\yfkg j\\oj;\\yfkg j\\oj;\\yfkg j\\ojwfg j\\ojwfg j\\ojwfg",
                    "zsf/ zsf/ zsf/ zs\\lt zs\\lt zs\\lt", "zfg\\t zfg\\t zfg\\t zfvf zfvf zfvf", "zlI) zlI) zlI) zLn zLn zLn", "z'e z'e z'e z'n\\s z'n\\s z'n\\s", "z}Ils z}Ils z}Ils zJsf zJsf zJsf", "z\\ofd z\\ofd z\\ofd  >dls >dls >dls", ">fg\\t >fg\\t >fg\\t >Ldfg >Ldfg >Ldfg"
                ],
                lesson10: ["i^\\sJ) i^\\sJ) i^\\sJ) i)\\* i)\\* i)\\*", "i*\\d'v i*\\d'v i*\\d'v if*j if*j if*j", "iJ*z iJ*z iJ*z ii\\&L ii\\&L ii\\&L",
                    ";Fu ;Fu ;Fu ;|o's\\t ;|o's\\t ;|o's\\t", ";|oJu ;|oJu ;|oJu ;fFbg ;fFbg ;fFbg,", ";fI/tf ;fI/tf ;fI/tf ;fyL ;fyL ;fyL", ";ls\\g' ;ls\\g' ;ls\\g' ;lsf/ ;lsf/ ;lsf/", ";'snf ;'snf ;'snf ;'s{t\\o ;'s{t\\o ;'s{t\\o", ";\\gfts ;\\gfts ;\\gfts ;\\g]x ;\\g]x ;\\g]x",
                    "xF;lnJ xF;lnJ xF;lnJ xsf/ xsf/ xsf/", "xfhl/ xfhl/ xfhl/ xfgfxfg xfgfxfg xfgfxfg", "xlhJ xlhJ xlhJ xldfn xldfn xldfn", "xL/f xL/f xL/f x'/L x'/L x'/L", "x'nfs x'nfs x'nfs x]nd]n x]nd]n x]nd]n", "xJOg' xJOg' xJOg' xJrJ xJrJ xJrJ", "xJgxf/ xJgxf/ xJgxf/",
                    "I]q I]q I]q Idf Idf Idf", "Ilk\\/ Ilk\\/ Ilk\\/ I'b\\/ I'b\\/ I'b\\/", "I) I) I) Iltlh Iltlh Iltlh", "Ilk\\t Ilk\\t Ilk\\t qle'jg qle'jg qle'jg", "qlsJ) qlsJ) qlsJ) qljlw qljlw qljlw", "qlk'/ qlk'/ qlk'/ qlkfq qlkfq qlkfq", "!fg !fg !fg !ftl !ftl !ftl", "!fgL !fgL !fgL !fgeI' !fgeI' !fgeI'"
                ]
            }
        },
        Advanced: {
            lesson1: ["c A O @ p U c A O @ p U", "P E _ - c| cm P E _ - c| cm", "s v u # < s v u # <", "r % h H ` r % h H `", "^ & * ( ) ^ & * ( )", "t y b w g t y b w g", "k K a e d k K a e d", "o / n j z o / n j z", "i ; x I q ! i ; x I q !",
                "c A O @ p U c A O @ p U", "P E _ - c| cm P E _ - c| cm", "s v u # < s v u # <", "r % h H ` r % h H `", "^ & * ( ) ^ & * ( )", "t y b w g t y b w g", "k K a e d k K a e d", "o / n j z o / n j z", "i ; x I q ! i ; x I q !"
            ],
            lesson2: ["s sf sl sL s' s\"", "s] s} sJ sB s| sm", "u uf ul uL u' u\"", "u] u} uJ uB u| um", "r rf rl rL r' r\"", "r] r} rJ rB r| rm", "h hf hl hL h' h\"", "h] h} hJ hB h| hm", "^ ^f ^l ^L ^' ^\"", "^] ^} ^J ^B ^| ^m",
                "* *f *l *L *' *\"", "*] *} *J *B *| *m", "y yf yl yL y' y\"", "y] y} yJ yB y| ym", "g gf gl gL g' g\"", "g] g} gJ gB g| gm", "e ef el eL e' e\"", "e] e} eJ eB e| em", "d df dl dL d' d\"", "d] d} dJ dB d| dm", "n nf nl nL n' n\"", "n] n} nJ nB n| nm", "z zf zl zL z' z\"", "z] z} zJ zB z| zm", "x xf xl xL x' x\"", "x] x} xJ xB x| xm"
            ],
            lesson3: ["gvJh\\g' x} dnf@ a;g\\t Ct'sJ x/lofnLdf", "d t phf* d?e'dldf x[/f@ ;s]%'", "g;d\\Hlg' x} dnf@ s'g} v'zlofnLdf", "d t b'mv / AFz'sJ ;fu/df kJ *'al ;s]%'", "gvJh\\g' x} dnf@ k\"[)ldfsJ h'g]nL /ftdf", "d t 55 *lu\\/LsJ #fddf hn\\g k'u]%'", "gvJh\\g' x} dnf@ xhf/J| b'glofFsJ el*df", "d t afn'j} afn'jfsJ d?e'dL df k'uL ;s]%'",
                "gvJh\\g' x] dnf@ j/klknsJ %xf/Ldf", "d t ?v} gePsJ d?e'dLdf kJ d*f/lg k'uL ;s]%'", "gvJh\\g' x} dnf@ hg\\de'dlsJ s'gf s'gfdf", "d t ufpF w/ %f*L ;d'g\\b\\/ t/L k/fO agl ;s]%'", "gvJh\\g' x} dnf@ kxlnfsJ ufpF #/sJ &]ufgfdf", "d t ca k/b]zL kJ e};s]%'"
            ],
            lesson4: ["s'g} ;do yloJ d}n] n]v\\g %J*l;s]sJ ylP", "AFvf t ylP d]/f t/ b]v\\g %f*l;s]sJ ylP", "d ;fob alnf@ hfg\\y]| xJnf xfjf ;Fu}", "afFsL x'Fb} ylPg d]/J c;\\tlt\\j st}", "xJ t\\oxL ;dodf e]^]sJ yloJ d}n] Pp^f sjltf", "d}n] n]v\\g g;s]sJ sjltf", "t\\oxL sjltf h;\\n] h;\\t} hg\\d bloJ y'k\\/} sjltfx?", "h;df %g w]/} za\\bx? cgl efj n's]sf",
                "cgulg\\tL ;kgf cgl v\\jfj n's]sf", "oJ sjltf cfK}Fdf pkg\\of; eg\\bf sd %}g", "t\oJ sljtf s'g} alz\\jfz eg\\bf sd %}g", ";fFr\\r} /dfOnJ cgB&J / crd\\dsJ % t\\oJ sjltf", "x[i % pn\\nf; % cfK\\gJ kgsJ Ajf;sf", ";fFr\\r} /fd\/J % t\\oJ sjltf d}n] n]v\\g g;s]sJ sjltf", "t\\oxL sjltf h;\\tJ dnfO sjl agfoJ", "t/ s'g} cK;Jr %}g rfx]/ kgl n]v\\g ;slg t\\oJ t sjltf",
                "slg sl n]v\\g g;slg] t\\oJ d]/J Ak\\g} sjltf xJ", "d\/J hLjgsJ gls} k\\/lo sjltf x'g]b ;w} d]/J ghls", "x/bd x/kn x/]s kfOnfx?df", "d]/J hLjgsJ ;a}eg\\bf pt\\s{i\\^ sjltf", "d}n] n]v\\g g;s]sJ sjltf"
            ],
            lesson5: ["alpFHL /Jbgdf snlnJ", "dw'/J pifsJ dJxgLdf .", "a}|; j;g\\t jlxf/ ;kgf", "s';'dfs/sL w\\jgldf .", "k\\/]d rsJ/ h'g]nL hfb\"", "z/fj gzfdf rds gh/df .", ";'g\\b/df ;a jlzfn jlnf;L", ";'vdf sJdn ;\\kg\\bgdf .", "gj gj Hn\\sf b]z al/fgf", "celnfifsf pr\\r p*fg .", "-kg\\of;ls /D  / nx/L xn'sf d'^'sJ xn'sf ufg .", "s[d I]qsJ hJz gjLg", "j;\\t'x?sJ hJv / tBn .",
                "ko/ b'j}sf e/df gl[e/ rB*f hut ;\\jtg\\q dJn .", "/D p*]sJ s^'tf KJ;\\/f Azfx?sJ %f/J rJ/ .", "rlg\\tf zJs jloJu a(]sf", "gx'FbJ zl/df t[s c#J/ .", ";l[hgfsJ hfn jlnf;L", "AK}| h]nL AK}| xf/ .", "K'n\\bJ zl/df xlpFb t'if/J", "ylrL/x]sJ huj\\ojxf/ .", "a(\\bJ r]t cs]nfkgsJ", "al[;l;s]sf ;kgf ;fh .", "pbf;kgfsJ %fgf ge g}", "zJs jlifb al/fgf Ajfh .",
                "hkdfnfsJ Avl/ e/df", "w/d/ ko/ h/fsJ sd\\kg .", "AF;'e/L gh/ gldLng", "jlrlq g} %;\\ x] hLjg."
            ],
            lesson6: ["d rlof ne/", "rT Awf rd\\rf rlgL xfn]/", "rlofkQL / kfgLdf #JnL", "Ps ulnf; rlof r';\\sL xfg\\b}", "rl;lb} u/]sJ rf;nfu\\bJ ;fHdf", "rlofpb} %' rlQ ga'H]sJ hLjgnf@", "rl^lZ k/]sJ dfg\\%]nf@", "rlg]sJ grlg]sJ ;a}nf@", "rT x][b} rlofsL r';\\sL xfg\\b}", "r'[n'd\\d *'a\\b}%' cg\\oJnsJ ejli\\odf .", "c[sJ r';\\sL rlof", "o; k^s K/s ;\\jfbdf",
                "rf/ blg c#l rf/ ah] tl/sJ s'/f ;d\\HlFb}", "#/sJ rJsdf rJ/LsJ gfdf r'/f ahf[b} r';lPsJ sfOnfnf@", "rBk^} kf[g] u/L r*\\sfPsf ylP", "rfg\\bgL Ag\\^Ln] .", "t];\\/J rJyJ r';\\sL;Fusf aftx?", "r'[gf k/]sf ;dfhsf gsr/fx?nf@ ;d[klt", "h;\\n] g r/fnf@ gl;\\kls\\/L p*\\g blg\\%g\\", "g r/fH} p*\\g rfxg] snlnf ;kgfx?nf@",
                "dfq AK\\g} rfxgf c?df yJkf[b} hfg\\%g\\ .", "cg\\tld rlofsJ r';\\sL", "g hLjgdf ;'vLsf /; AP H} nfu\\%", "g hLjgn] hlpg] hLp kfP% h}", ";fob rlof h;\\t} /x]% ;f/fsJ hLjg", "x/]s hLjgsf r's\\;L nJenfu\\bJ t x'g] t/", "cg\\t\\df /lQJ ulnf; h} vfnL x'g] /x]% hLjg ."
            ],
            lesson7: ["cefj / _hn] pdf/lPsf p[hfx?", "AuJ ag]/ an\\g g;s] i%L cu]gfdf", "eo|s/ o'$ n*l/x]sL %lg\\ Adf", "%J/fsJ ejli\\o ;lFg\\rfpg aufpF%lg\\ k;lgf", "/ ('Dfnf@ blP/ AK\\g} z/l/ vfgf", "n*\\%lg\\ ulTL df[tJn;Fu o'$", "ha df[tJnn] gl/g\\t/ _sn\\% s[sz w\\jgl", "Adf ;g\\g ;s\\blgg\\ %J/fsJ rlr\\ofx^ kgl",
                "ha ;'g\\%lg\\ AtlPH}| st}", "sfvdf r\\ofk]/ r';fpF%lg\\ kfn]kfnJ ;\\tg", "/ v;fpF%lg\\ Adf", "k;lgfh;\\t} AF;' tk\\k tk\\k %J/fsJ glwf/df", "w[tLn] aJH aJs]/ AFugdf ;'g\\b/", "K\"n K'nfPHF", "K'nfpg' % Adfnf@ kgl ;g\\tfg", "AK\" ag]/ j]ujfg kfgLn] ^J*]sJ au/ h;\\t}", "x'[sfpg'%  Adfn@ kgl ;kgf s]xL yfg",
                "nuffOblg'% %J/fnf@ A<df eJ^J", "@fdsJ tfkn] ;'sfPsJ z/l/ agl;s\\oJ s|sfn h;\\t}", "nfu\\% Adfnf@ u'dfPsJ %}g s]xL", "Adf x/]s I) dx;'; u[%g\\ %J/fsJ d'v x]/]/", ";|;f/ kfPsJ h;\\t} xf/] kgl hlt]sJ h;\\t}", "kfgLn] /D abn] h;\\t}", "abnlFbJ %g\\ cH Adfsf ;kgf / /x/x?", "cK;Jr\\ t\\oxL ('DfH} K'^l/x]%g\\", "Adfsf jlz\jf; / Afzfx?"
            ],
            lesson8: ["egg egg gfgL . s] u/L eJ tof/", "slt /;;lt /fd\\/J s\\of dhf r^ s\\of /", ";sn d'v b'?;\\t} kf[g ;s\\g] ckf/", "slt rt'/ s'/f oJ hJ % t;\\jL/ ;f/ .", "d'v kgl % b'?;\\t} gfs tf &lZ Hg\\ %", "/|u kgl t n'ufsJ &lZ s\\of x]/ . ag\\% .", "/l; v'z uha}sf efp %g\\ s\\of b'?;\\t", "d t blg blg x][b} ag\\%' Agg\\b d;\\t .",
                ";a hgsg o;\\t} rlqsf/L s'g}n]", "a'?z;lt agfP s\\of/ sn\\k]/ k}n] .", "x{boe/ ePsf /<\\g kfP jlrf/", "stl stl b'gglofFd} u[g ;s\\y]| tof/ .", "htl htl p;nf@ x][% oJ ag\\% ;r\\rf", "cgl ;a d'v aJn\\%g\\ x'g\\g s\\o} x]/ sr\\rf .", "%lge/ o;elq} #';\\%' ;|;f/ kf@", "h;tl/ dgdBhL ;Bv dln\\%g\\ dnf@ .", "ha gh/ nuf@ hJ k(]sJ ;'g]/",
                "dg dg d jlrf[g] ag\\% w\\ofgL ag\/ .", "d'vx? ;a aJn\\%g\\ aJn\\b%g\\ rlq ;f/f", "?vx? ;a K'n\\%g\\ k|v aJn\\%g\\ xhf/fF .", "xl|*g xl|* ;FuL P Ps xfFuf r(]/ tntl/ ;anf@ aLr t;\\jL/ x]/ .", "d t blg blg k(\\g] u[% t\\o;\\t} u/]/", "stl stl b'glofFdf rlqsf g} k;]/ ."
            ],
            lesson9: ["yloJ u[dL j]nf xkxk yloJ #fd ax't", "an] H}F Asfz} bgbg yloJ wk\\wk;lt .", "a*J dfgL u[dL ?vtn ;'tL zLtn;lt", "HlsL hle\\/J v;\\/J (ns;Fu n]^L ;'v;lt' .", "yloJ oB^f &\"nJ ;sn kz'sJ ;l|x jgsJ", "b'j} rld\\nL AFvf ;'v;Fu *^]sJ ctl glsJ .", "%xf/L xfFufsJ x{bosg &)\\*f u/lblg]", "r/f a;\\g] aJn\\g] tntl/ /x]sJ ;'v blg] .",
                "a*J d;\\tL kf@ ;'v;Fu glbf@sg t\\oxfF", "/x]sJ j]nfdf ;sn kz'sJ Og\\b\\/ ;'vdf .", "h/f afDf vJkL tntl/ a;]sJ cnlstl", "t\\oxfF gl;\\s] d\";f v'??? u/L bB*g stl .", "glbfPsJ /fhfsg /tl g^]/Lsg t\\oxfF", "rrL| r\\jL| r\\jL| u[b} j/lk/l xl|*] t\\oJ ;dodf .", "t\\o;} x]k\\bf x]k\\b} k%l k%l r(] AFu t\\o;sJ", "a*J gfrL pK\\/L v'??? u/] za\\b gglsJ .",
                "rkfP sJxLn] /pF kgl d';] bfFtx?n]", "s'g} gfr] r(\\b} zl/pk/ nfdf k'%/n] .", "s'g] j[n] v'[v'/\\ tntl/ s'g} k'r\\%/tl/", "eoJ gfr} h;\\t} tlgsg t\\oxfF d]^\\g /x/ .", "a*J dfgL H[sJ %lg%lg chDJ % ;'t'jf", "% xk\\sf[bJ d\';fx?sg a*f ^'i\\^ eF*'jf .", "g^]/L rn\\%g\\ tL %lg%lg p xfg\\bJ % t kgl", "bu'[b} %n\\%g\\ tL rt'/ ;a %BF H}F ?vdgl ."
            ],
            lesson10: ["d]/J %fofF / d]/J Ps\\nJkg", "d]/f b'@ dlqx? %g\\ w]/} dft]sJ", "cg\\wsf/df %fofFn] d]/J ;fy %J*]/ uoJ", "t/ Ps\\nJkg t cH} kgl d]/J ;fy g} yloJ", "t}/]sf %g\\ efjgf t}/l/f%' Ps\\n}", "xts*L H} ;kgf s}bL ef%' Ps\\n}", "sJxL hfg ;s\\b}gg\\ t\\oxfF hfg] u[%' Ps\\n}", "cr]n t afgL nfu\\oJ v';L %' d Ps\\n}", "sJxL %}g dnf@ vJh\\g] x/fP gL afn %}g",
                "vJh\\b}gg\\ slg yf % d t\\o;\\tJ aafn x}g", "x]*KJg % sfgdf uLt ;'gl/f%' Ps\\n}", "bldfu a\\/xdf)* d #'dl/f%' Ps\\n}", "sxln] sfxL nfu\\% d Ps\\n} x'g'sJ sf/) s]", ";fyL ef@ ;a} %g\\ e]^\\g gL ;s\\%' A/dn]", "hfg dg %}g st} xk\\tf blg eJ dxlg}", "s] u? H} efsJ % cglz\\rlt % ejli\\o", "el/sJ ^'k\\kfdf a;l rlr\\rf@ /fv\\g dg %", ";a}n] oJ u/ eg\\% d r} ;Jr\\%' cg\\t",
                ";'t\\g c#l d ;Jr\\%' ;do ;a} v]/ uJ", "eJnlsJ blg gL t\\o;\\t} K/s s] g} % / xJ", "c[sJ j[i s]xL u[%' t\\oxL g} ;Jrl/fy] kJxJ/", "Egfdf d'xf/ x][%' K/s dfq\\ *g\\*lKJ/", "yf% d slg PZnJ %' t\\oxL kgl v';L %'", "d]/J sJxL ;'g\\blb}gg\\ ;asJ s'/f ;'g\\blg\\%'", "t\\o;}n] s'/f /fv\\bf H\\ofp gdfgL ;'g\\blg'", "gq\\ sL d]/J Ps\\nJkg / dnf@ a'Hblg'"
            ]
        },
        Expert: {
            lesson1: ["asdf asdf"],
            lesson2: [" asldkfj;lkjasd;lff "],
            lesson3: [],
            lesson4: [],
            lesson5: [],
            lesson6: [],
            lesson7: [],
            lesson8: [],
            lesson9: [],
            lesson10: []
        }
    };
    const keyMapping = {
        //home row
        ' ': ' ',
        'a': 'ब',
        'A': 'आ',
        's': 'क',
        'S': 'ङ्क',
        'd': 'म',
        'D': 'ङ्ग',
        'f': 'ा',
        'F': 'ँ',
        'g': 'न',
        'G': 'द्द',
        ';': 'स',
        ':': 'ट्ठ',
        'l': 'ि',
        'L': 'ी',
        'k': 'प',
        'K': 'फ',
        'j': 'व',
        'J': 'ो',
        'h': 'ज',
        'H': 'झ',
        "'": 'ु',
        '"': 'ू',
        //top row
        'q': 'त्र',
        'Q': 'त्त',
        'w': 'ध',
        'W': 'ड्ढ',
        'e': 'भ',
        'E': 'ऐ',
        'r': 'च',
        'R': 'द्ब',
        't': 'त',
        'T': 'ट्ट',
        'y': 'थ',
        'Y': 'ठ्ठ',
        'u': 'ग',
        'U': 'ऊ',
        'i': 'ष',
        'I': 'क्ष',
        'o': 'य',
        'O': 'इ',
        'p': 'उ',
        'P': 'ए',
        '[': 'र्',
        '{': 'ृ',
        ']': 'े',
        '}': 'ै',
        "\\": "्",
        '|': 'ं',
        //buttom keys
        'z': 'श',
        'Z': 'क्क',
        'x': 'ह',
        'X': 'ह्य',
        'c': 'अ',
        'C': 'ऋ',
        'v': 'ख',
        'V': 'ॐ',
        'b': 'द',
        'B': 'ौ',
        'n': 'ल',
        'N': 'द्य',
        'm': 'ः',
        'M': 'ड्ड',
        ',': 'ऽ',
        '<': 'ङ',
        '.': '।',
        '>': 'श्र',
        '/': 'र',
        '?': 'रु',
        //numbers keys
        '`': 'ञ',
        '~': '॥',
        '1': '१',
        '!': 'ज्ञ',
        '2': '२',
        '@': 'ई',
        '3': '३',
        '#': 'घ',
        '4': '४',
        '$': 'द्ध',
        '5': '५',
        '%': 'छ',
        '6': '६',
        '^': 'ट',
        '7': '७',
        '&': 'ठ',
        '8': '८',
        '*': 'ड',
        '9': '९',
        '(': 'ढ',
        '0': '०',
        ')': 'ण',
        '-': 'औ',
        '_': 'ओ',
        '=': '‍‍‍',
        '+': '‌',
    };
    //Exception handler--fetching contentMap according to selection
    function fetchcontentMap(contentMap, difficulty, keyRow, lesson) {
        resetProgressBar();
        if (keyRow in contentMap[difficulty]) {
            return (contentMap[difficulty] ? .[keyRow] ? .[lesson]);
        } else if (lesson in contentMap[difficulty]) {
            return contentMap[difficulty] ? .[lesson];
        }
    }
    //to enable and disable the selection option of KeyRow
    if (selectedDifficulty === "Advanced" || selectedDifficulty === "Expert") {
        keyRowSelect.disabled = true;
    } else {
        keyRowSelect.disabled = false;
    };
    // Initialize index to 0
    let currentIndex = 0;
    let totalLetters = 0;
    let mistakeLetters = 0;
    //selection array
    const currentlesson = fetchcontentMap(contentMap, selectedDifficulty, selectedKeyRow, selectedLesson);
    //console.log("Current lesson content:", currentlesson);
    let typedCharacters = "";
    let currentWord = currentlesson[currentIndex];

    function displayNextWord() {
        if (currentIndex < currentlesson.length) {
            currentWord = currentlesson[currentIndex];
            console.log(`index:${currentWord}`)
            var mappedWord = currentWord
                .split('')
                .map(char => keyMapping[char] || char) // Replace by unicode as define in keymapping
                .join('');
            typedCharacters = "";
            typedWord.textContent = ""; //Clear the typed word
            wordDisplay.textContent = mappedWord;
            console.log(`Display:${mappedWord}`)
            calculateLetters(); //to calculate total letters 
        } else {
            wordDisplay.textContent = "";
            document.removeEventListener("keydown", typing);
            progressBar.innerText = "Practice Complete!";
            // console.log("Practice Completed!");
        }
    }
    // keyevent
    const typedWord = document.getElementById("typedWord");
    document.addEventListener("keydown", typing);

    function typing(event) {
        if (currentWord === typedCharacters) {
            typedCharacters = "";
            typedWord.textContent = ""; // Clear the typed word
            displayNextWord();
        } else if (currentWord && event.key === currentWord[typedCharacters.length]) {
            // Correct key pressed, add to typed characters
            typedCharacters += event.key;
            correctaudio.play(); //play correct audio
            erroraudio.pause();
            var mappedTypedCharacters = typedCharacters
                .split('')
                .map(char => keyMapping[char] || char) // Replace by unicode as define in keymapping
                .join('');
            typedWord.textContent = mappedTypedCharacters;
            console.log(`typedword:${mappedTypedCharacters}`)
            startTimer(); //to calculate time taken;

            if (typedCharacters.length === currentWord.length) {
                stopTimer(); //to calculate time taken; 
                typedCharacters = "";
                typedWord.textContent = ""; // Clear the typed word
                currentIndex++;
                displayNextWord();
                calculateAcc(); // to calculate accuracy;   
                calculateSpeed();
                updateProgressBar(); //update progress bar

            }
        } else {
            //condition for mistakes 
            const commonkeys = ['Enter', 'Backspace', 'Control', 'Alt', 'Shift', 'Tab', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'CapsLock', 'Meta'];
            if (!commonkeys.includes(event.key)) {
                if (event.key !== currentWord[typedCharacters.length] && typedCharacters != "" && 'Shift' + event.key) {
                    calculateMistake();
                }
            }
        }
    }
    //calculation functions
    function calculateLetters() {
        totalLetters = currentWord.length;
        document.getElementById("totalLetters").textContent = totalLetters;
        // console.log(`Total letters: ${totalLetters}`);
    }

    function calculateMistake() {
        mistakeLetters++;
        console.log(`Mistake letters: ${mistakeLetters}`); //to display the mistakelatters     
        erroraudio.play(); // play error audio  
        document.getElementById("mistakeLetters").textContent = mistakeLetters;
    }

    function calculateAcc() {
        const accuracyPercentage = Math.round(((totalLetters - mistakeLetters) / totalLetters) * 100);
        document.getElementById("accuracy").textContent = accuracyPercentage;
        // console.log(`Accuracy: ${accuracyPercentage}%`);  
    }
    let timer = null;
    let startTime = 0;
    let elapsedTime = 0;
    let isRunning = false;
    displayTimeTaken = document.getElementById("timeTaken");

    function startTimer() {
        if (!isRunning) {
            resetCalculation(); //Reseting for new start
            startTime = Date.now() - elapsedTime;
            timer = setInterval(() => {
                const currentTime = Date.now();
                elapsedTime = currentTime - startTime; //in milliseconds(i.e a minute (60 seconds × 1000 milliseconds))
                let seconds = Math.floor(elapsedTime / 1000 % 60);
                seconds = String(seconds).padStart(2, '0');
                displayTimeTaken.textContent = `${seconds}`;
            }, 10);
            isRunning = true;
        }
    }

    function stopTimer() {
        if (isRunning) {
            clearInterval(timer);
            isRunning = false;
        }
    }

    function calculateSpeed() {
        const typingSpeedWPM = Math.round(((totalLetters - mistakeLetters) / 5) / (elapsedTime / 60000));
        document.getElementById("speed").textContent = `${Math.abs(typingSpeedWPM)}`;
    }

    function updateProgressBar() {
        const progressPercentage = (currentIndex / currentlesson.length) * 100;
        progressBar.style.width = progressPercentage + '%';
    }

    function resetProgressBar() {
        progressBar.style.width = 0;
        progressBar.innerText = "";
    }

    function resetCalculation() {
        elapsedTime = 0; //Reseting to zero on every start
        mistakeLetters = 0; //Resetting mistakeletters to zero for new calcu
        document.getElementById("mistakeLetters").innerText = "00";
        document.getElementById("accuracy").innerText = "00";
        document.getElementById("speed").innerText = "00";
    }


    // Initial display
    displayNextWord();
}