OC.L10N.register(
    "cookbook",
    {
    "No image with the matching MIME type was found on the server." : "Sunucu üzerinde eşleşen MIME türünde bir görsel bulunamadı. ",
    "Recipe with ID %d was not found in database." : "%d kimlikli yemek tarifi veri tabanında bulunamadı.",
    "Downloading of a file failed returned the following error message: %s" : "Bir dosya şu hata iletisi ile indirilemedi: %s",
    "No content encoding was detected in the content." : "İçerikte bir içerik kodlayıcı bulunamadı.",
    "The given image for the recipe %s cannot be parsed. Aborting and skipping it." : "%s yemek tarifi için belirtilen görsel işlenemedi. Vazgeçilip atlanıyor.",
    "No valid recipe was left after heuristics of recipe %s." : "%s yemek tarifi için buluşsal taramadan sonra bir yemek tarifi bulunamadı.",
    "Heuristics failed for image extraction of recipe %s." : "%s yemek tarifi için buluşsal tarama görseli ayıklanamadı.",
    "Could not guess image URL as no recipe URL was found." : "Yemek tarifi adresi bulunamadığından görsel adresi öngörülemedi.",
    "Could not guess image URL scheme from recipe URL %s" : "%s yemek tarifi adresinden görsel adresi öngörülemedi",
    "Could not parse recipe ingredients. It is no array." : "Bir dizi olmadığından, yemek tarifinin içindekiler işlenemedi.",
    "Could not parse recipe instructions as they are no array." : "Bir dizi olmadığından, yemek tarifinin yapılışı işlenemedi. ",
    "Cannot parse recipe: Unknown object found during flattening of instructions." : "Yemek tarifi işlenemedi. Yapılışı düzeltilirken bilinmeyen bir nesne ile karşılaşıldı.",
    "Did not find any p or li entries in the raw string of the instructions." : "Yapılış dizgesinin ham halinde herhangi bir p ya da li kaydı bulunamadı.",
    "Could not parse the keywords for recipe {recipe}." : "{recipe} yemek tarifinin anahtar sözcükleri işlenemedi.",
    "Could not parse the nutrition information successfully for recipe {name}." : "{name} yemek tarifinin beslenme değerleri işlenemedi.",
    "Using heuristics to parse the \"recipeYield\" field representing the number of servings of recipe {name}." : "{name} yemek tarifinin porsiyon sayısını gösteren \"recipeYield\" alanının işlemek için buluşsal tarama kullanılıyor.",
    "_Only a single number was found in the \"recipeYield\" field. Using it as number of servings._::_There are %n numbers found in the \"recipeYield\" field. Using the highest number found as number of servings._" : ["\"recipeYield\" alanında tek bir sayı bulundu. Porsiyon sayısı olarak bulunan en yüksek sayı kullanılıyor.","\"recipeYield\" alanında %n birkaç sayı bulundu. Porsiyon sayısı olarak bulunan en yüksek sayı kullanılıyor."],
    "Could not parse \"recipeYield\" field. Falling back to 1 serving." : "\"recipeYield\" alanı işlenemedi. 1 porsiyon olduğu varsayılıyor.",
    "Could not parse recipe tools. Expected array or string." : "Yemek tarifi araçları işlenemedi. Dizi ya da dizge bekleniyor.",
    "Could not find recipe in HTML code." : "HTML kodunda yemek tarifi bulunamadı.",
    "JSON cannot be decoded." : "JSON kodu çözülemedi.",
    "No recipe was found." : "Herhangi bir yemek tarifi bulunamadı!",
    "Parsing of HTML failed." : "HTML kodu işlenemedi.",
    "Unsupported error level during parsing of XML output." : "XML çıktısı işlenirken desteklenmeyen bir hata düzeyi ile karşılaşıldı.",
    "_Warning %u occurred while parsing %s._::_Warning %u occurred %n times while parsing %s._" : ["Uyarı: %s işlenirken %u ile karşılaşıldı.","Uyarı: %s işlenirken %u ile %n kez karşılaşıldı."],
    "_Error %u occurred while parsing %s._::_Error %u occurred %n times while parsing %s._" : ["Hata: %s işlenirken %u ile karşılaşıldı.","Hata: %s işlenirken %u ile %n kez karşılaşıldı."],
    "_Fatal error %u occurred while parsing %s._::_Fatal error %u occurred %n times while parsing %s._" : ["Ciddi hata: %s işlenirken %u ile karşılaşıldı.","Ciddi hata: %s işlenirken %u ile %n kez karşılaşıldı."],
    "First time it occurred in line %u and column %u" : "İlk kez %u satırında %u sütununda karşılaşıldı",
    "Could not parse duration {duration}" : "{duration} süresi işlenemedi",
    "The recipe has already an image file. Cannot create a new one." : "Yemek tarifinin zaten bir görsel dosyası var. Yeni bir dosya oluşturulamadı.",
    "There is no primary image for the recipe present." : "Yemek tarifinin birincil görseli yok.",
    "Cannot parse non-POST multipart encoding. This is a bug." : "POST olmayan çok parçalı kodlama işlenemedi. Bu bir hata olmalı. Lütfen bize bildirin.",
    "Cannot detect type of transmitted data. This is a bug, please report it." : "Aktarılan verinin türü algılanamadı. Bu bir hata olmalı. Lütfen bize bildirin.",
    "Invalid URL-encoded string found. Please report a bug." : "Adres kodlamalı dizge bulundu. Lütfen bize hata olarak bildirin.",
    "Could not parse timestamp {timestamp}" : "{timestamp} zaman damgası işlenemedi",
    "The user is not logged in. No user configuration can be obtained." : "Kullanıcı oturum açmamış. Hehrangi bir kullanıcı yapılandırması alınamadı.",
    "Recipes" : "Yemek tarifleri",
    "The user folder cannot be created due to missing permissions." : "İzinler eksik olduğundan kullanıcı klasörü oluşturulamadı.",
    "The configured user folder is a file." : "Yapılandırılmış kullanıcı klasörü bir dosya.",
    "User cannot create recipe folder" : "Kullanıcı yemek tarifi klasörü ekleyemez",
    "in %s" : "%s içinde",
    "The JSON file in the folder with ID %d does not have a valid name." : "%d kimlikli klasördeki JSON dosyasının adı geçersiz.",
    "Could not parse URL" : "Adres işlenemedi",
    "Exception while downloading recipe from %s." : "Yemek tarifi %s üzerinden indirilirken bir sorun çıktı.",
    "Download from %s failed as HTTP status code %d is not in expected range." : "%s, %d beklenen aralıkta değil HTTP durum koduyla indirilemedi. ",
    "Could not find a valid encoding when parsing %s." : "%s işlenirken geçerli bir kodlama bulunamadı.",
    "No parser found for the given import." : "Belirtilen içe aktarma için bir işleyici bulunamadı.",
    "No recipe name was given. A unique name is required to store the recipe." : "Yemek tarifi adı belirtilmemiş. Yemekl tarifini kaydetmek için eşsiz bir ad vermelisiniz.",
    "Another recipe with that name already exists" : "Aynı adlı bir yemek tarifi zaten var",
    "No recipe data found. This is a bug" : "Herhangi bir yemek tarifi verisi bulunamadı. Bu bir hata.",
    "Recipe with ID %d not found." : "%d kimlikli yemek tarifi bulunamadı.",
    "Image size \"%s\" is not recognized." : "\"%s\" görsel boyutu anlaşılamadı.",
    "The full-sized image is not a thumbnail." : "Tam boyutlu görsel bir küçük görsel değil.",
    "The thumbnail type %d is not known." : "%d küçük görsel türü bilinmiyor.",
    "Cookbook" : "Yemek kitabı",
    "An integrated cookbook using schema.org JSON files as recipes" : "Yemek tarifleri için schema.org JSON dosyaları kullanan bütünleşik bir yemek kitabı",
    "A library for all your recipes. It uses JSON files following the schema.org recipe format. To add a recipe to the collection, you can paste in the URL of the recipe, and the provided web page will be parsed and downloaded to whichever folder you specify in the app settings." : "Tüm yemek tarifleriniz için bir kitaplık. schema.org yemek tarifi biçimine uygun JSON dosyalarını kullanır. Derlemeye bir yemek tarifi eklemek için yemek tarifinin adresini yapıştırabilirsiniz. Yemek tarifinin bulunduğu site sayfası işlenerek, yemek tarifi uygulama ayarlarında belirttiğiniz klasöre indirilir.",
    "Editing recipe" : "Yemek tarifini düzenleme",
    "Viewing recipe" : "Yemek tarifini görüntüleme",
    "All recipes" : "Tüm yemek tarifleri",
    "None" : "Yok",
    "Loading app" : "Uygulama yükleniyor",
    "Loading recipe" : "Yemek tarifi yükleniyor",
    "Recipe not found" : "Yemek tarifi bulunamadı",
    "Page not found" : "Sayfa bulunamadı",
    "Creating new recipe" : "Yeni yemek tarifi ekleme",
    "Edit" : "Düzenle",
    "Save" : "Kaydet",
    "Search" : "Arama",
    "Filter" : "Süzgeç",
    "Reload recipe" : "Yemek tarifini yeniden yükle",
    "Abort editing" : "Düzenlemekten vazgeç",
    "Print recipe" : "Yemek tarifini yazdır",
    "Clone recipe" : "Yemek tarifini kopyala",
    "Delete recipe" : "Yemek tarifini sil",
    "Category" : "Kategori",
    "Recipe name" : "Yemek tarifi adı",
    "Tags" : "Etiketler",
    "Search for recipes" : "Yemek tarifi ara",
    "Are you sure you want to delete this recipe?" : "Bu yemek tarifini silmek istediğinize emin misiniz?",
    "Delete failed" : "Silinemedi",
    "Cannot access recipe folder." : "Yemek tarifi klasörüne erişilemedi.",
    "Select recipe folder" : "Yemek tarifi klasörünü seçin",
    "Path to your recipe collection" : "Yemek tarifi derlemenizin yolu",
    "You are logged in with a guest account. Therefore, you are not allowed to generate arbitrary files and folders on this Nextcloud instance. To be able to use the Cookbook app as a guest, you need to specify a folder where all recipes are stored. You will need write permission to this folder." : "Bir konuk hesabı ile oturum açmışsınız. Bu nedenle, bu Nextcloud kopyasına istediğiniz şekilde dosya ve klasör ekleyemezsiniz. Yemek kitabı uygulamasını konuk olarak kullanabilmek için, tüm yemek tariflerinin kaydedileceği bir klasör belirlemelisiniz. Bu klasöre yazma izninizin olması gerekir.",
    "Create recipe" : "Yemek tarifi ekle",
    "Download recipe from URL" : "Yemek tarifini adresten indir",
    "Uncategorized recipes" : "Kategorisiz yemek tarifleri",
    "Categories" : "Kategoriler",
    "Rename" : "Yeniden adlandır",
    "Enter new category name" : "Yeni kategorinin adını yazın",
    "Cookbook settings" : "Yemek kitabı ayarları",
    "Failed to load category {category} recipes" : "{category} kategorisindeki yemek tarifleri yüklenemedi",
    "Failed to update name of category \"{category}\"" : "\"{category}\" kategorisinin adı değiştirilemedi",
    "The server reported an error. Please check." : "Sunucu bir sorun bildirdi. Lütfen denetleyin.",
    "Could not query the server. This might be a network problem." : "Sunucu sorgulanamadı. Bir ağ sorunu olabilir.",
    "Loading category recipes …" : "Kategorinin yemek tarifleri yükleniyor …",
    "Failed to fetch categories" : "Kategoriler alınamadı",
    "Enter URL or select from your Nextcloud instance on the right" : "Adresi yazın ya da sağdan Nextcloud kopyanızdan seçin",
    "Pick a local image" : "Bir yerel görsel seçin",
    "Path to your recipe image" : "Yemek tarifi görselinin yolu",
    "Move entry up" : "Kaydı yukarı taşı",
    "Move entry down" : "Kaydı aşağı taşı",
    "Insert entry above" : "Aşağı kayıt ekle",
    "Delete entry" : "Kaydı sil",
    "Add" : "Ekle",
    "Select option" : "Seçeneği seçin",
    "No recipes created or imported." : "Oluşturulmuş ya da içe aktarılmış bir yemek tarifi yok.",
    "To get started, you may use the text box in the left navigation bar to import a new recipe. Click below to create a recipe from scratch." : "Başlamak için yeni bir yemek tarifi içe aktarmak üzere sol gezinme çubuğundaki metin kutusunu kullanabilirsiniz. Sıfırdan bir yemek tarifi oluşturmak için aşağıya tıklayın.",
    "No recipes" : "Herhangi bir yemek tarifi yok",
    "Create new recipe!" : "Yeni yemek tarifi ekle!",
    "Select order" : "Sıralamayı seçin",
    "Name" : "Ad",
    "Creation date" : "Eklenme tarihi",
    "Modification date" : "Son değişiklik tarihi",
    "Toggle keyword" : "Anahtar sözcüğü değiştir",
    "Keyword not contained in visible recipes" : "Anahtar sözcük görünen yemek tariflerinde kullanılmamış",
    "Toggle keyword area size" : "Anahtar sözcük alanı boyutunu değiştir",
    "Order keywords by number of recipes" : "Anahtar sözcükler yemek tarifi sayısına göre sıralansın",
    "Order keywords alphabetically" : "Anahtar sözcükler alfabetik olarak sıralansın",
    "Recipe folder" : "Yemek tarifi klasörü",
    "Rescan library" : "Kitaplığı yeniden tara",
    "Please pick a folder" : "Lütfen bir klasör seçin",
    "Update interval in minutes" : "Dakika cinsinden güncelleme sıklığı",
    "Recipe display settings" : "Yemek tarifi görüntüleme ayarları",
    "Print image with recipe" : "Yemek tarifi ile görsel de yazdırılsın",
    "Show keyword cloud in recipe lists" : "Yemek tarifleri listesinde anahtar sözcük bulutu görüntülensin",
    "Info blocks" : "Bilgi blokları",
    "Control which blocks of information are shown in the recipe view. If you do not use some features and find them distracting, you may hide them." : "Yemek tarifi görünümünde hangi bilgi bloklarının görüntüleneceğini belirleyin. Kullanmadığınız ve dikkatinizi dağıtan özellikleri gizleyebilirsiniz.",
    "Preparation time" : "Hazırlama süresi",
    "Cooking time" : "Pişirme süresi",
    "Total time" : "Toplam süre",
    "Nutrition information" : "Beslenme bilgileri",
    "Tools" : "Araçlar",
    "Frontend debug settings" : "Ön yüz hata ayıklama ayarları",
    "This allows to temporarily enable logging in the browser console in case of problems. You will not need these settings by default." : "Bu seçenek, sorun çıkması durumunda geçici olarak tarayıcı konsolunda oturum açmayı sağlar. Varsayılan olarak bu ayarlara gerek duymayacaksınız.",
    "Enable debugging" : "Hata ayıklamayı aç",
    "Could not set preference for image printing" : "Görsel yazdırma ayarı yapılamadı",
    "Could not set recipe update interval to {interval}" : "Yemek tarifi güncelleme sıklığı {interval} olarak ayarlanamadı",
    "Could not save visible info blocks" : "Görünür bilgi blokları kaydedilemedi",
    "Could not set recipe folder to {path}" : "Yemek tarifi derleme klasörü {path} olarak ayarlanamadı",
    "Dismiss" : "Yok say",
    "Cancel" : "İptal",
    "OK" : "Tamam",
    "The page was not found" : "Sayfa bulunamadı",
    "Description" : "Açıklama",
    "URL" : "Adres",
    "Image" : "Görsel",
    "Preparation time (hours:minutes)" : "Hazırlama süresi (saat:dakika)",
    "Cooking time (hours:minutes)" : "Pişirme süresi (saat:dakika)",
    "Total time (hours:minutes)" : "Toplam süre (saat:dakika)",
    "Choose category" : "Kategori seçin",
    "Keywords" : "Anahtar sözcükler",
    "Choose keywords" : "Anahtar sözcükleri seçin",
    "Servings" : "Kaç kişilik",
    "Toggle if the number of servings is present" : "Varsa porsiyon sayısını aç/kapat",
    "Nutrition Information" : "Beslenme bilgileri",
    "Pick option" : "Seçin",
    "Ingredients" : "Malzemeler",
    "Instructions" : "Nasıl yapılır",
    "You have unsaved changes! Do you still want to leave?" : "Kaydedilmemiş değişiklikleriniz var. Gene de ayrılmak istiyor musunuz?",
    "Calories" : "Kalori",
    "E.g.: 450 kcal (amount & unit)" : "Mrnek 450 kcal (miktar ve birim)",
    "Carbohydrate content" : "Karbonhidrat miktarı",
    "E.g.: 2 g (amount & unit)" : "Örnek: 2 g (miktar ve birim)",
    "Cholesterol content" : "Kolesterol miktarı",
    "Fat content" : "Yağ miktarı",
    "Fiber content" : "Lif miktarı",
    "Protein content" : "Protein miktarı",
    "Saturated-fat content" : "Doymuş yağ miktarı",
    "Serving size" : "Porsiyon sayısı",
    "Enter serving size (volume or mass)" : "Porsiyon sayısını yazın (hacim ya da ağırlık)",
    "Sodium content" : "Sodyum miktarı",
    "Sugar content" : "Şeker miktarı",
    "Trans-fat content" : "Trans yağ miktarı",
    "Unsaturated-fat content" : "Doymamış yağ miktarı",
    "Failed to fetch keywords" : "Anahtar sözcükler alınamadı",
    "Unknown answer returned from server. See logs." : "Sunucudan bilinmeyen bir yanıt alındı. Günlüklere bakabilirsiniz.",
    "No answer for request was received." : "İsteğe bir yanıt verilmedi.",
    "Could not start request to save recipe." : "Yemek tarifini kaydetme isteği başlatılamadı.",
    "Clone of {name}" : "{name} kopyası",
    "Loading recipe failed" : "Yemek tarifi yüklenemedi",
    "Recipe image" : "Yemek tarifi görseli",
    "Cooking time is up!" : "Pişirme zamanı doldu!",
    "Search recipes with this keyword" : "Bu anahtar sözcüğün kullanıldığı yemek tariflerini ara",
    "Date created" : "Eklenme tarihi",
    "Last modified" : "Güncellenme tarihi",
    "Source" : "Kaynak",
    "Preparation time (H:MM)" : "Hazırlama süresi (S:DD)",
    "Cooking time (H:MM)" : "Pişirme süresi (S:DD)",
    "Total time (H:MM)" : "Toplam süre (S:DD)",
    "Copy ingredients" : "Malzemeleri kopyala",
    "Serving Size" : "Porsiyon boyutu",
    "Energy" : "Enerji",
    "Sugar" : "Şeker",
    "Carbohydrate" : "Karbonhidrat",
    "Cholesterol" : "Kolesterol",
    "Fiber" : "Lif",
    "Protein" : "Protein",
    "Sodium" : "Sodyum",
    "Fat total" : "Toplam yağ",
    "Saturated Fat" : "Doymuş Yağ",
    "Unsaturated Fat" : "Doymamış yağ",
    "Trans Fat" : "Trans yağ",
    "Loading…" : "Yükleniyor…",
    "The ingredient cannot be recalculated due to incorrect syntax. Please change it to this syntax: amount unit ingredient. Examples: 200 g carrots or 1 pinch of salt" : "Yanlış söz dizimi nedeniyle içerik yeniden hesaplanamadı. Lütfen bu söz dizimini şu şekilde değiştirin: miktar birim bileşen. Örnekler: 200 gr havuç ya da 1 tutam tuz",
    "Failed to load recipes with keywords: {tags}" : "Şu anahtar sözcüklerin bulunduğu yemek tarifleri yüklenemedi: {tags}",
    "Failed to load search results" : "Arama sonuçları yüklenemedi",
    "Cannot read content of JSON file %s" : "%s JSON dosyasının içeriği okunamadı",
    "Cannot download image using curl" : "Görsel cURL kullanılarak indirilemedi",
    "Filter current recipes" : "Geçerli yemek tariflerini süz",
    "Search recipes" : "Yemek tarifi ara",
    "Delete nutrition item" : "Beslenme ögesini sil",
    "Please select option first." : "Lütfen önce bir seçim yapın.",
    "Show settings for filtering recipe list" : "Yemek tarifi listesi süzme ayarları görüntülensin",
    "Order" : "Sıralama",
    "Show filter settings" : "Süzgeç ayarlarını görüntüle",
    "Filter name" : "Süzgeç adı",
    "Search term" : "Arama ifadesi",
    "All categories" : "Tüm kategoriler",
    "Show recipes containing any selected category" : "Seçilmiş kategorilerden birine uyan yemek tariflerini görüntüle",
    "Show recipes containing all selected categories" : "Seçilmiş kategorilerin tümüne uyan yemek tariflerini görüntüle",
    "All keywords" : "Tüm anahtar sözcükler",
    "Show recipes containing any selected keyword" : "Seçilmiş anahtar sözcüklerden birine uyan yemek tariflerini görüntüle",
    "Show recipes containing all selected keywords" : "Seçilmiş anahtar sözcüklerin tümüne uyan yemek tariflerini görüntüle",
    "Clear" : "Temizle",
    "Recipe filters" : "Yemek tarifi süzgeçleri",
    "Matching all selected categories" : "Seçilmiş kategorilerin tümüne uyan",
    "Matching any selected category" : "Seçilmiş kategorilerden birine uyan",
    "Matching all selected keywords" : "Seçilmiş anahtar sözcüklerin tümüne uyan",
    "Matching any selected keyword" : "Seçilmiş anahtar sözcüklerden birine uyan",
    "Apply" : "Uygula",
    "Show filters and sorting in recipe lists" : "Yemek tarifleri listesinde süzgeçler ve sıralama görüntülensin",
    "Preparation time (hours:minutes:seconds)" : "Hazırlama süresi (saat:dakika:saniye)",
    "Cooking time (hours:minutes:seconds)" : "Pişirme süresi (saat:dakika:saniye)",
    "Total time (hours:minutes:seconds)" : "Toplam süre (saat:dakika:saniye)",
    "_{hours}h_::_{hours}h_" : ["{hours}s","{hours}s"],
    "_{minutes}m_::_{minutes}m_" : ["{minutes}d","{minutes}d"],
    "_{seconds}s_::_{seconds}s_" : ["{seconds}sn","{seconds}sn"],
    "Copy ingredients to the clipboard" : "İçindekileri panoya kopyala",
    "{item} copied to clipboard" : "{item} öge panoya kopyalandı",
    "Copying {item} to clipboard failed" : "{item} panoya kopyalanamadı",
    "ingredients" : "Malzemeler",
    "The ingredient cannot be recalculated due to incorrect syntax. Please ensure the syntax follows this format: amount unit ingredient and that a specific number of portions is set for this function to work correctly. Examples: 200 g carrots or 1 pinch of salt." : "İçerik, yanlış söz dizimi nedeniyle yeniden hesaplanamadı. Lütfen söz diziminin şu biçimde olduğundan emin olun: miktar birim içerik ve bu işlevin doğru çalışması için ayarlanmış porsiyon sayısı. Örnek: 200 gr havuç veya 1 tutam tuz."
},
"nplurals=2; plural=(n > 1);");
