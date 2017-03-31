document.write('<link rel="stylesheet" href="https://assets-cdn.github.com/assets/gist-embed-9f0a4ad9c85ca776e669003688baa9d55f9db315562ce4d231d37dab2714c70a.css">')
document.write('<div id=\"gist44799632\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-backend-ts\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"blob-wrapper data type-typescript\">\n      <table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\">\n      <tr>\n        <td id=\"file-backend-ts-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-backend-ts-LC1\" class=\"blob-code blob-code-inner js-file-line\">@<span class=\"pl-en\">Injectable<\/span>()<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-backend-ts-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-backend-ts-LC2\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">export<\/span> <span class=\"pl-k\">class<\/span> <span class=\"pl-en\">Backend<\/span> {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-backend-ts-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-backend-ts-LC3\" class=\"blob-code blob-code-inner js-file-line\">  _talks<span class=\"pl-k\">:<\/span> {[<span class=\"pl-v\">id<\/span><span class=\"pl-k\">:<\/span><span class=\"pl-c1\">number<\/span>]<span class=\"pl-k\">:<\/span> <span class=\"pl-en\">Talk<\/span>} <span class=\"pl-k\">=<\/span> {};<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-backend-ts-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-backend-ts-LC4\" class=\"blob-code blob-code-inner js-file-line\">  _list<span class=\"pl-k\">:<\/span> <span class=\"pl-c1\">number<\/span>[] <span class=\"pl-k\">=<\/span> [];<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-backend-ts-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-backend-ts-LC5\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-backend-ts-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-backend-ts-LC6\" class=\"blob-code blob-code-inner js-file-line\">  filters<span class=\"pl-k\">:<\/span> <span class=\"pl-en\">Filters<\/span> <span class=\"pl-k\">=<\/span> {speaker: <span class=\"pl-c1\">null<\/span>, title: <span class=\"pl-c1\">null<\/span>, minRating: <span class=\"pl-c1\">0<\/span>};<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-backend-ts-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-backend-ts-LC7\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-backend-ts-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-backend-ts-LC8\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-k\">constructor<\/span>(<span class=\"pl-k\">private<\/span> <span class=\"pl-v\">http<\/span><span class=\"pl-k\">:<\/span> <span class=\"pl-en\">Http<\/span>) {}<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-backend-ts-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-backend-ts-LC9\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-backend-ts-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-backend-ts-LC10\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-k\">get<\/span> talks()<span class=\"pl-k\">:<\/span> <span class=\"pl-en\">Talk<\/span>[] {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-backend-ts-L11\" class=\"blob-num js-line-number\" data-line-number=\"11\"><\/td>\n        <td id=\"file-backend-ts-LC11\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">return<\/span> <span class=\"pl-c1\">this<\/span>.<span class=\"pl-smi\">_list<\/span>.<span class=\"pl-en\">map<\/span>(<span class=\"pl-v\">n<\/span> <span class=\"pl-k\">=&gt;<\/span> <span class=\"pl-c1\">this<\/span>.<span class=\"pl-smi\">_talks<\/span>[<span class=\"pl-smi\">n<\/span>]);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-backend-ts-L12\" class=\"blob-num js-line-number\" data-line-number=\"12\"><\/td>\n        <td id=\"file-backend-ts-LC12\" class=\"blob-code blob-code-inner js-file-line\">  }<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-backend-ts-L13\" class=\"blob-num js-line-number\" data-line-number=\"13\"><\/td>\n        <td id=\"file-backend-ts-LC13\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-backend-ts-L14\" class=\"blob-num js-line-number\" data-line-number=\"14\"><\/td>\n        <td id=\"file-backend-ts-LC14\" class=\"blob-code blob-code-inner js-file-line\">  findTalk(<span class=\"pl-v\">id<\/span><span class=\"pl-k\">:<\/span> <span class=\"pl-c1\">number<\/span>)<span class=\"pl-k\">:<\/span> <span class=\"pl-en\">Observable<\/span>&lt;<span class=\"pl-en\">Talk<\/span>&gt; {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-backend-ts-L15\" class=\"blob-num js-line-number\" data-line-number=\"15\"><\/td>\n        <td id=\"file-backend-ts-LC15\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">return<\/span> <span class=\"pl-k\">of<\/span>(<span class=\"pl-c1\">this<\/span>.<span class=\"pl-smi\">_talks<\/span>[<span class=\"pl-smi\">id<\/span>]);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-backend-ts-L16\" class=\"blob-num js-line-number\" data-line-number=\"16\"><\/td>\n        <td id=\"file-backend-ts-LC16\" class=\"blob-code blob-code-inner js-file-line\">  }<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-backend-ts-L17\" class=\"blob-num js-line-number\" data-line-number=\"17\"><\/td>\n        <td id=\"file-backend-ts-LC17\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-backend-ts-L18\" class=\"blob-num js-line-number\" data-line-number=\"18\"><\/td>\n        <td id=\"file-backend-ts-LC18\" class=\"blob-code blob-code-inner js-file-line\">  rateTalk(<span class=\"pl-v\">id<\/span><span class=\"pl-k\">:<\/span> <span class=\"pl-c1\">number<\/span>, <span class=\"pl-v\">rating<\/span><span class=\"pl-k\">:<\/span> <span class=\"pl-c1\">number<\/span>)<span class=\"pl-k\">:<\/span> <span class=\"pl-c1\">void<\/span> {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-backend-ts-L19\" class=\"blob-num js-line-number\" data-line-number=\"19\"><\/td>\n        <td id=\"file-backend-ts-LC19\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">const<\/span> talk <span class=\"pl-k\">=<\/span> <span class=\"pl-c1\">this<\/span>.<span class=\"pl-smi\">_talks<\/span>[<span class=\"pl-smi\">id<\/span>];<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-backend-ts-L20\" class=\"blob-num js-line-number\" data-line-number=\"20\"><\/td>\n        <td id=\"file-backend-ts-LC20\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-smi\">talk<\/span>.<span class=\"pl-smi\">yourRating<\/span> <span class=\"pl-k\">=<\/span> <span class=\"pl-smi\">rating<\/span>;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-backend-ts-L21\" class=\"blob-num js-line-number\" data-line-number=\"21\"><\/td>\n        <td id=\"file-backend-ts-LC21\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c1\">this<\/span>.<span class=\"pl-smi\">http<\/span>.<span class=\"pl-en\">post<\/span>(<span class=\"pl-s\"><span class=\"pl-pds\">`<\/span>/rate<span class=\"pl-pds\">`<\/span><\/span>, {id: <span class=\"pl-smi\">talk<\/span>.<span class=\"pl-c1\">id<\/span>, yourRating: <span class=\"pl-smi\">rating<\/span>}).<span class=\"pl-c1\">forEach<\/span>(() <span class=\"pl-k\">=&gt;<\/span> {});<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-backend-ts-L22\" class=\"blob-num js-line-number\" data-line-number=\"22\"><\/td>\n        <td id=\"file-backend-ts-LC22\" class=\"blob-code blob-code-inner js-file-line\">  }<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-backend-ts-L23\" class=\"blob-num js-line-number\" data-line-number=\"23\"><\/td>\n        <td id=\"file-backend-ts-LC23\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-backend-ts-L24\" class=\"blob-num js-line-number\" data-line-number=\"24\"><\/td>\n        <td id=\"file-backend-ts-LC24\" class=\"blob-code blob-code-inner js-file-line\">  changeFilters(<span class=\"pl-v\">filters<\/span><span class=\"pl-k\">:<\/span> <span class=\"pl-en\">Filters<\/span>)<span class=\"pl-k\">:<\/span> <span class=\"pl-c1\">void<\/span> {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-backend-ts-L25\" class=\"blob-num js-line-number\" data-line-number=\"25\"><\/td>\n        <td id=\"file-backend-ts-LC25\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c1\">this<\/span>.<span class=\"pl-smi\">filters<\/span> <span class=\"pl-k\">=<\/span> <span class=\"pl-smi\">filters<\/span>;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-backend-ts-L26\" class=\"blob-num js-line-number\" data-line-number=\"26\"><\/td>\n        <td id=\"file-backend-ts-LC26\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c1\">this<\/span>.<span class=\"pl-en\">refetch<\/span>();<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-backend-ts-L27\" class=\"blob-num js-line-number\" data-line-number=\"27\"><\/td>\n        <td id=\"file-backend-ts-LC27\" class=\"blob-code blob-code-inner js-file-line\">  }<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-backend-ts-L28\" class=\"blob-num js-line-number\" data-line-number=\"28\"><\/td>\n        <td id=\"file-backend-ts-LC28\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-backend-ts-L29\" class=\"blob-num js-line-number\" data-line-number=\"29\"><\/td>\n        <td id=\"file-backend-ts-LC29\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-k\">private<\/span> refetch()<span class=\"pl-k\">:<\/span> <span class=\"pl-c1\">void<\/span> {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-backend-ts-L30\" class=\"blob-num js-line-number\" data-line-number=\"30\"><\/td>\n        <td id=\"file-backend-ts-LC30\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">const<\/span> params <span class=\"pl-k\">=<\/span> <span class=\"pl-k\">new<\/span> <span class=\"pl-en\">URLSearchParams<\/span>();<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-backend-ts-L31\" class=\"blob-num js-line-number\" data-line-number=\"31\"><\/td>\n        <td id=\"file-backend-ts-LC31\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-smi\">params<\/span>.<span class=\"pl-c1\">set<\/span>(<span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>speaker<span class=\"pl-pds\">&quot;<\/span><\/span>, <span class=\"pl-c1\">this<\/span>.<span class=\"pl-smi\">filters<\/span>.<span class=\"pl-smi\">speaker<\/span>);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-backend-ts-L32\" class=\"blob-num js-line-number\" data-line-number=\"32\"><\/td>\n        <td id=\"file-backend-ts-LC32\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-smi\">params<\/span>.<span class=\"pl-c1\">set<\/span>(<span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>title<span class=\"pl-pds\">&quot;<\/span><\/span>, <span class=\"pl-c1\">this<\/span>.<span class=\"pl-smi\">filters<\/span>.<span class=\"pl-c1\">title<\/span>);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-backend-ts-L33\" class=\"blob-num js-line-number\" data-line-number=\"33\"><\/td>\n        <td id=\"file-backend-ts-LC33\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-smi\">params<\/span>.<span class=\"pl-c1\">set<\/span>(<span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>minRating<span class=\"pl-pds\">&quot;<\/span><\/span>, <span class=\"pl-c1\">this<\/span>.<span class=\"pl-smi\">filters<\/span>.<span class=\"pl-smi\">minRating<\/span>.<span class=\"pl-c1\">toString<\/span>());<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-backend-ts-L34\" class=\"blob-num js-line-number\" data-line-number=\"34\"><\/td>\n        <td id=\"file-backend-ts-LC34\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c1\">this<\/span>.<span class=\"pl-smi\">http<\/span>.<span class=\"pl-c1\">get<\/span>(<span class=\"pl-s\"><span class=\"pl-pds\">`<\/span>/talks<span class=\"pl-pds\">`<\/span><\/span>, {search: <span class=\"pl-smi\">params<\/span>}).<span class=\"pl-c1\">forEach<\/span>((<span class=\"pl-v\">r<\/span>) <span class=\"pl-k\">=&gt;<\/span> {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-backend-ts-L35\" class=\"blob-num js-line-number\" data-line-number=\"35\"><\/td>\n        <td id=\"file-backend-ts-LC35\" class=\"blob-code blob-code-inner js-file-line\">      <span class=\"pl-k\">const<\/span> data <span class=\"pl-k\">=<\/span> <span class=\"pl-smi\">r<\/span>.<span class=\"pl-en\">json<\/span>();<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-backend-ts-L36\" class=\"blob-num js-line-number\" data-line-number=\"36\"><\/td>\n        <td id=\"file-backend-ts-LC36\" class=\"blob-code blob-code-inner js-file-line\">      <span class=\"pl-c1\">this<\/span>.<span class=\"pl-smi\">_talks<\/span> <span class=\"pl-k\">=<\/span> <span class=\"pl-smi\">data<\/span>.<span class=\"pl-smi\">talks<\/span>;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-backend-ts-L37\" class=\"blob-num js-line-number\" data-line-number=\"37\"><\/td>\n        <td id=\"file-backend-ts-LC37\" class=\"blob-code blob-code-inner js-file-line\">      <span class=\"pl-c1\">this<\/span>.<span class=\"pl-smi\">_list<\/span> <span class=\"pl-k\">=<\/span> <span class=\"pl-smi\">data<\/span>.<span class=\"pl-smi\">list<\/span>;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-backend-ts-L38\" class=\"blob-num js-line-number\" data-line-number=\"38\"><\/td>\n        <td id=\"file-backend-ts-LC38\" class=\"blob-code blob-code-inner js-file-line\">    });<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-backend-ts-L39\" class=\"blob-num js-line-number\" data-line-number=\"39\"><\/td>\n        <td id=\"file-backend-ts-LC39\" class=\"blob-code blob-code-inner js-file-line\">  }<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-backend-ts-L40\" class=\"blob-num js-line-number\" data-line-number=\"40\"><\/td>\n        <td id=\"file-backend-ts-LC40\" class=\"blob-code blob-code-inner js-file-line\">}<\/td>\n      <\/tr>\n<\/table>\n\n  <\/div>\n\n  <\/div>\n  \n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/vsavkin/74fa4b81aa60bc26192e07d487a41b03/raw/622d2c4d0eec77d4f3083b9ef96bef40ecc22f24/backend.ts\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/vsavkin/74fa4b81aa60bc26192e07d487a41b03#file-backend-ts\">backend.ts<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')
