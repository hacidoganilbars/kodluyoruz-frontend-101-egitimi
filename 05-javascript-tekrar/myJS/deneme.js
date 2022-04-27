// splice(); diziye eleman/elemanlar eklenebilmesini ya da silinebilmesini sağlar. 
		// Silinen değeri gei döndürür. ekleneni döndürmez. dizinin yapısını değiştirir.
 
		var dizi = new Array("ali", "veli", "kırklareli", "emret", "komutanım");
 
		document.write("orjinal dizi : " + dizi + "<br>");
		var sil = dizi.splice(2, 1); // 2. indisten başla 1 tane sil, silinecek adet sayısı belirtilmezse 2. indisten başlar sona kadar siler.
		
		document.write("silinen değer : " + sil + "<br>");
		document.write("silindikten sonraki dizi : " + dizi + "<br>");
		
		var ekle = dizi.splice(1,0,"ahmet", "mehmet"); // 1. indisten başla (değeri 1. indisin önüne koyar), değer silme (0 koyarak değer silme diyoruz), sonradan yazılanları diziye 1. indisten itibaren ekle
		
		document.write("eklenen değer : " + ekle + "<br>"); // eklenen değeri döndürmez dedik!
		document.write("ekledikten sonraki dizi : " + dizi + "<br>");
 
		// aynı anda hem silip hem ekleme yapalım
		
		var oncesilsonraekle = dizi.splice(1,2,"murat"); // 1. indisten sonra (1. indis dahil) 2 değer silip güncel değer i ekledi
		document.write("silinen değerler : " + oncesilsonraekle + "<br>");
		document.write("ekledikten sonraki dizi : " + dizi + "<br>");