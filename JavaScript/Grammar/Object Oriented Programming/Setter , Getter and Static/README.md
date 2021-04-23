CHAPTER‌ ‌28‌ ‌|‌ ‌Static,‌ ‌Getter‌ ‌&‌ ‌Setter‌ ‌
Static‌ ‌members‌ ‌are‌ ‌accessed‌ ‌directly‌ ‌through‌ ‌the‌ ‌class‌ ‌name,‌ ‌not‌ ‌through‌ ‌
the‌ ‌instance.‌ ‌
class‌‌ ‌‌Car‌‌ ‌{‌ ‌
    ‌‌static‌‌ ‌‌printMsg‌(){‌ ‌
        ‌‌return‌‌ ‌‌"this‌ ‌is‌ ‌Car‌ ‌"‌;‌ ‌
    ‌}‌ ‌
}‌ ‌
Car‌.‌printMsg‌();‌ ‌
class‌‌ ‌‌Square‌‌ ‌{‌ ‌
 ‌‌static‌‌ ‌‌sqrt‌(‌n‌)‌ ‌{‌ ‌
 ‌‌if‌‌ ‌(‌n‌‌ ‌===‌ ‌‌undefined‌)‌ ‌ ‌
 ‌‌n‌‌ ‌=‌ ‌‌1‌;‌ ‌
 ‌‌return‌‌ ‌‌n‌‌ ‌*‌ ‌‌n‌;‌ ‌
 ‌}‌ ‌
 ‌}‌ ‌
 ‌‌class‌‌ ‌‌DoubleSquare‌‌ ‌‌extends‌‌ ‌‌Square‌‌ ‌{‌ ‌
 ‌‌static‌‌ ‌‌sqrt‌(‌n‌)‌ ‌{‌ ‌
 ‌‌return‌‌ ‌‌super‌.‌sqrt‌(‌n‌)‌ ‌*‌ ‌‌super‌.‌sqrt‌(‌n‌);‌ ‌
 ‌}‌ ‌
 ‌}‌ ‌
 ‌‌console‌.‌log‌(‌Square‌.‌sqrt‌());‌ ‌ ‌
 ‌‌var‌‌ ‌‌temp‌‌ ‌=‌ ‌‌new‌‌ ‌‌Square‌();‌ ‌
 ‌‌console‌.‌log‌(‌temp‌.‌sqrt‌());‌ ‌
 ‌‌console‌.‌log‌(‌DoubleSquare‌.‌sqrt‌(‌3‌));‌ ‌
*some‌ ‌use-case‌ ‌of‌ ‌writing‌ ‌javascript‌ ‌ ‌
Introduced‌ ‌in‌ ‌ES5,‌ ‌Setter‌ ‌and‌ ‌Getter‌ ‌let‌ ‌you‌ ‌define‌ ‌the‌ ‌object‌ ‌accessor.‌ ‌
This‌ ‌Object‌ ‌accessor‌ ‌acts‌ ‌as‌ ‌property‌ ‌or‌ ‌methods‌ ‌in‌ ‌javaScript.‌ ‌
Setter‌ ‌and‌ ‌Getter's‌ ‌syntax‌ ‌is‌ ‌way‌ ‌too‌ ‌standardizing‌ ‌the‌ ‌property‌ ‌of‌ ‌an‌ ‌
object.‌ ‌
let‌‌ ‌‌user‌‌ ‌=‌ ‌{‌ ‌
  ‌‌name:‌‌ ‌‌"John"‌,‌ ‌
  ‌‌surname:‌‌ ‌‌"Smith"‌,‌ ‌
 ‌
 ‌
 ‌ ‌
56‌ ‌
 ‌
  ‌‌get‌‌ ‌‌fullName‌()‌ ‌{‌ ‌
    ‌‌return‌‌ ‌‌`‌${this‌.‌name‌}‌‌ ‌‌${this‌.‌surname‌}‌`‌;‌ ‌
  ‌},‌ ‌
  ‌‌set‌‌ ‌‌fullName‌(‌value‌)‌ ‌{‌ ‌
    ‌[‌this‌.‌name‌,‌ ‌‌this‌.‌surname‌]‌ ‌=‌ ‌‌value‌.‌split‌(‌"‌ ‌"‌);‌ ‌
  ‌}‌ ‌
};‌ ‌