(function(){var loadHandler=window['sl_{8DBB8292-AD80-4B19-93A4-C7A57B2D9E1E}'];loadHandler&&loadHandler(28, '<div id="spr0_13d76b7b"><div id="spr1_13d76b7b" class="kern"><img id="img1_13d76b7b" src="data/img1.png" width="960px" height="1280px" alt="" style="left:0px;top:0px;"/></div><div id="spr2_13d76b7b" class="kern"><div id="spr3_13d76b7b" style="left:66px;top:70.326px;"><div style="width:0px;"><span id="txt0_13d76b7b" data-width="260.343750" style="left:285.31px;top:611.841px;">Рис. 17.  Метод Пауэлла</span></div><div style="width:0px;"><span id="txt1_13d76b7b" data-width="23.570313" style="left:42.65px;top:679.651px;">д)</span><span id="txt2_13d76b7b" style="left:66.275px;top:679.651px;"> </span><span id="txt3_13d76b7b" data-width="177.894073" style="left:89.955px;top:679.651px;">Симплексный </span><span id="txt4_13d76b7b" data-width="102.015160" style="left:274.76px;top:679.651px;">метод. </span><span id="txt5_13d76b7b" data-width="84.806641" style="left:383.32px;top:679.651px;">Метод </span><span id="txt6_13d76b7b" data-width="103.044922" style="left:483.2px;top:679.651px;">основан </span><span id="txt7_13d76b7b" data-width="34.412109" style="left:603.2px;top:679.651px;">на </span><span id="txt8_13d76b7b" data-width="57.955078" style="left:654.25px;top:679.651px;">том, </span><span id="txt9_13d76b7b" data-width="47.318359" style="left:728.02px;top:679.651px;">что </span><span id="txt10_13d76b7b" data-width="28.984375" style="left:791.7px;top:679.651px;">по</span></div><div style="width:0px;"><span id="txt11_13d76b7b" data-width="134.873047" style="left:7.2px;top:713.251px;">известным </span><span id="txt12_13d76b7b" data-width="132.548828" style="left:152.56px;top:713.251px;">значениям </span><span id="txt13_13d76b7b" data-width="103.017578" style="left:293.895px;top:713.251px;">целевой </span><span id="txt14_13d76b7b" data-width="112.683594" style="left:406.655px;top:713.251px;">функции </span><span id="txt15_13d76b7b" data-width="20.220703" style="left:528.66px;top:713.251px;">в </span><span id="txt16_13d76b7b" data-width="124.605469" style="left:558.86px;top:713.251px;">вершинах </span><span id="txt17_13d76b7b" data-width="128.078125" style="left:693.145px;top:713.251px;">выпуклого</span></div><div style="width:0px;"><span id="txt18_13d76b7b" data-width="195.083984" style="left:7.2px;top:746.851px;">многогранника, </span><span id="txt19_13d76b7b" data-width="159.564453" style="left:206.06px;top:746.851px;">называемого </span><span id="txt20_13d76b7b" data-width="158.265625" style="left:369.355px;top:746.851px;">симплексом, </span><span id="txt21_13d76b7b" data-width="129.185547" style="left:531.235px;top:746.851px;">находится </span><span id="txt22_13d76b7b" data-width="157.841797" style="left:663.69px;top:746.851px;">направление,</span></div><div style="width:0px;"><span id="txt23_13d76b7b" data-width="20.220703" style="left:7.2px;top:780.451px;">в </span><span id="txt24_13d76b7b" data-width="106.558594" style="left:41.98px;top:780.451px;">котором </span><span id="txt25_13d76b7b" data-width="98.738281" style="left:160.435px;top:780.451px;">следует </span><span id="txt26_13d76b7b" data-width="97.507813" style="left:272.845px;top:780.451px;">сделать </span><span id="txt27_13d76b7b" data-width="146.521484" style="left:384.02px;top:780.451px;">следующий </span><span id="txt28_13d76b7b" data-width="59.472656" style="left:544.55px;top:780.451px;">шаг, </span><span id="txt29_13d76b7b" data-width="80.376953" style="left:615.29px;top:780.451px;">чтобы </span><span id="txt30_13d76b7b" data-width="111.029297" style="left:709.945px;top:780.451px;">получить</span></div><div style="width:0px;"><span id="txt31_13d76b7b" data-width="150.800781" style="left:7.2px;top:814.051px;">наибольшее </span><span id="txt32_13d76b7b" data-width="155.285156" style="left:178.43px;top:814.051px;">уменьшение </span><span id="txt33_13d76b7b" data-width="103.017578" style="left:354.16px;top:814.051px;">целевой </span><span id="txt34_13d76b7b" data-width="119.683594" style="left:477.945px;top:814.051px;">функции. </span><span id="txt35_13d76b7b" data-width="56.205078" style="left:617.97px;top:814.051px;">При </span><span id="txt36_13d76b7b" data-width="62.972656" style="left:695.19px;top:814.051px;">этом </span><span id="txt37_13d76b7b" data-width="43.230469" style="left:778.255px;top:814.051px;">под</span></div><div style="width:0px;"><span id="txt38_13d76b7b" data-width="151.265625" style="left:7.2px;top:847.651px;">симплексом </span><span id="txt39_13d76b7b" data-width="20.220703" style="left:164.055px;top:847.651px;">в </span><span id="txt40_13d76b7b" style="left:191.14px;top:847.651px;">n</span><span id="txt41_13d76b7b" data-width="107.173828" style="left:205.14px;top:847.651px;">-мерном </span><span id="txt42_13d76b7b" data-width="166.373047" style="left:318.695px;top:847.651px;">пространстве </span><span id="txt43_13d76b7b" data-width="146.070313" style="left:492.655px;top:847.651px;">понимается </span><span id="txt44_13d76b7b" data-width="175.656250" style="left:645.645px;top:847.651px;">многогранник,</span></div><div style="width:0px;"><span id="txt45_13d76b7b" data-width="124.578125" style="left:7.2px;top:881.251px;">имеющий </span><span id="txt46_13d76b7b" style="left:153.925px;top:881.251px;">n</span><span id="txt47_13d76b7b" data-width="36.791016" style="left:167.925px;top:881.251px;">+1 </span><span id="txt48_13d76b7b" data-width="119.177734" style="left:226.9px;top:881.251px;">вершину, </span><span id="txt49_13d76b7b" data-width="91.929688" style="left:365.28px;top:881.251px;">каждая </span><span id="txt50_13d76b7b" data-width="33.044922" style="left:478.95px;top:881.251px;">из </span><span id="txt51_13d76b7b" data-width="107.652344" style="left:534.17px;top:881.251px;">которых </span><span id="txt52_13d76b7b" data-width="158.908203" style="left:661.98px;top:881.251px;">определяется</span></div><div style="width:0px;"><span id="txt53_13d76b7b" data-width="172.320313" style="left:7.2px;top:914.851px;">пересечением </span><span id="txt54_13d76b7b" style="left:179.665px;top:914.851px;">n</span><span id="txt55_13d76b7b" style="left:193.665px;top:914.851px;"> </span><span id="txt56_13d76b7b" data-width="209.945313" style="left:200.665px;top:914.851px;">гиперплоскостей </span><span id="txt57_13d76b7b" data-width="103.126953" style="left:410.51px;top:914.851px;">данного </span><span id="txt58_13d76b7b" data-width="166.373047" style="left:512.94px;top:914.851px;">пространства.</span></div><div style="width:0px;"><span id="txt59_13d76b7b" data-width="132.070313" style="left:42.65px;top:948.451px;">Примером </span><span id="txt60_13d76b7b" data-width="131.974609" style="left:182.015px;top:948.451px;">симплекса </span><span id="txt61_13d76b7b" data-width="34.412109" style="left:321.31px;top:948.451px;">на </span><span id="txt62_13d76b7b" data-width="136.636719" style="left:363.46px;top:948.451px;">плоскости  </span><span id="txt63_13d76b7b" data-width="109.921875" style="left:515.605px;top:948.451px;">является </span><span id="txt64_13d76b7b" data-width="162.462891" style="left:633.225px;top:948.451px;">треугольник. </span><span id="txt65_13d76b7b" style="left:802.075px;top:948.451px;">В</span></div><div style="width:0px;"><span id="txt66_13d76b7b" data-width="150.513672" style="left:7.2px;top:982.051px;">трехмерном </span><span id="txt67_13d76b7b" data-width="166.373047" style="left:178.23px;top:982.051px;">пространстве </span><span id="txt68_13d76b7b" data-width="151.265625" style="left:366.445px;top:982.051px;">симплексом </span><span id="txt69_13d76b7b" data-width="74.156250" style="left:537.56px;top:982.051px;">будет </span><span id="txt70_13d76b7b" data-width="191.173828" style="left:629.945px;top:982.051px;">четырехгранная</span></div><div style="width:0px;"><span id="txt71_13d76b7b" data-width="122.773438" style="left:7.2px;top:1015.651px;">пирамида </span><span id="txt72_13d76b7b" data-width="64.736328" style="left:129.95px;top:1015.651px;">(рис. </span><span id="txt73_13d76b7b" data-width="44.324219" style="left:194.7px;top:1015.651px;">18).</span></div></div><div id="spr4_13d76b7b" style="left:159.07px;top:51.786px;"><img id="img0_13d76b7b" src="data/img59.gif" width="637.953" height="618.945" alt=""/></div></div></div>');})();