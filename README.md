# :notebook_with_decorative_cover: **Noteify Backend API**

Bu proje, Node.js ve Express.js kullanılarak oluşturulmuş bir **RESTful API**'dir. Kullanıcıların not ekleme, silme, güncelleme ve listeleme işlemlerini gerçekleştirmelerini sağlar. Ayrıca kullanıcı kimlik doğrulama işlemleri için **JWT** kullanılmıştır.

---

## :star: **Özellikler**
- **Kimlik Doğrulama**: Kullanıcıların oturum açması ve JWT ile kimlik doğrulaması yapılır.
- **Not Ekleme**: Giriş yapmış kullanıcılar, yeni bir not ekleyebilir.
- **Not Silme**: Kullanıcılar, kendi notlarını silebilir.
- **Not Güncelleme**: Kullanıcılar, mevcut notlarını düzenleyebilir.
- **Not Listeleme**: Kullanıcılar, kendi notlarını listeleyebilir.

---

## :wrench: **Teknolojiler**
- **Node.js**: Uygulama altyapısı
- **Express.js**: RESTful API geliştirme
- **JSON Web Tokens (JWT)**: Kullanıcı kimlik doğrulama
- **MongoDB**: Veri depolama

---

## :floppy_disk: **Kurulum**

1. Bu projeyi klonlayın:
    ```bash
    git clone https://github.com/bykeremx/noteify-backend.git
    ```

2. Gerekli bağımlılıkları yükleyin:
    ```bash
    npm install
    ```

3. `.env` dosyasını oluşturun ve aşağıdaki bilgileri girin:
    ```env
    # Port ayarları
    PORT=8080

    # DB bağlantısı
    DB_URI=mongodb://localhost:27017/api-test

    # JWT secret key
    JWT_SECRET=your_secret_key

    # JWT oturum süresi
    JWT_EXPIRES_IN=1h

    # Geliştirme ortamı
    NODE_ENV=development

    # Cookie geçerlilik süresi (saat olarak)
    JWT_COOKIE_TIME=5
    ```

4. Sunucuyu çalıştırın:
    ```bash
    npm run dev
    ```

---

## :package: **`package.json` Açıklamaları**

### :gear: **Scripts**
- **`dev`**: Geliştirme ortamında uygulamanızı çalıştırmak için `npm run dev` komutunu kullanabilirsiniz. Bu komut, **`nodemon`** kullanarak uygulamanızı başlatır ve dosya değişikliklerini izler.
    ```json
    "scripts": {
      "dev": "nodemon app.js"
    }
    ```

---

### :package: **Bağımlılıklar**

- **`bcrypt`**: Şifreleme işlemleri için kullanılır.
- **`colors`**: Konsolda renkli metin yazdırmak için kullanılır.
- **`dotenv`**: Çevresel değişkenlerinizi `.env` dosyasından almak için gereklidir.
- **`express`**: Express.js framework'ü.
- **`express-async-handler`**: Asenkron hataları düzgün bir şekilde yönetmek için kullanılır.
- **`jsonwebtoken`**: JWT token'ları oluşturmak ve doğrulamak için kullanılır.
- **`mongoose`**: MongoDB ile bağlantı kurmak için gereklidir.

---

### :construction_worker: **DevDependencies**
- **`nodemon`**: Geliştirme ortamında uygulamanızın dosyalarındaki değişiklikleri izler ve otomatik olarak yeniden başlatır.

---

## :scroll: **API Endpointleri**

| **HTTP Yöntemi** | **URL**                    | **Açıklama**                   | **Kimlik Doğrulama** | **Simge** |
|------------------|----------------------------|--------------------------------|----------------------|-----------|
| :lock: **POST**   | /api/auth/register         | Kullanıcı kaydı oluşturur      | Hayır                | :key: |
| :key: **POST**    | /api/auth/login            | Kullanıcı giriş yapar         | Hayır                | :unlock: |
| :door: **GET**    | /api/user/logout           | Kullanıcı oturumunu sonlandırır| Evet                 | :door: |
| :notebook_with_decorative_cover: **GET** | /api/user/me               | Notları listeler               | Evet                 | :memo: |
| :page_facing_up: **POST**  | /api/user/addnote          | Yeni not ekler                 | Evet                 | :page_with_curl: |
| :pencil2: **PUT**  | /api/user/update/:id       | Notu günceller                 | Evet                 | :writing_hand: |
| :x: **DELETE**     | /api/user/delete/:id       | Notu siler                     | Evet                 | :wastebasket: |

---

### :memo: **Açıklamalar:**
- **:lock: `POST /api/auth/register`**: Kullanıcı kaydını oluşturur.
- **:key: `POST /api/auth/login`**: Kullanıcı giriş yapar ve JWT token alır.
- **:door: `GET /api/user/logout`**: Kullanıcı oturumunu sonlandırarak JWT token'ı geçersiz kılar.
- **:notebook_with_decorative_cover: `GET /api/user/me`**: Kullanıcıya ait notları listeleyen endpoint.
- **:page_facing_up: `POST /api/user/addnote`**: Kullanıcı, yeni bir not ekler.
- **:pencil2: `PUT /api/user/update/:id`**: Var olan bir notu günceller.
- **:x: `DELETE /api/user/delete/:id`**: Kullanıcıya ait notu siler.



### **Postman Scriptleri:**

- **Login Script**:
  ```js
  let tokenCookie = pm.cookies.get('acces_token');
  // Eğer çerez varsa, global değişkene kaydet
  if (tokenCookie) {
      pm.globals.set('_token', tokenCookie);
      console.log('Çerezden JWT token global değişkene atandı:', tokenCookie);
  } else {
      console.log('Çerez bulunamadı.');
  }
 ---
 - **Logout Script

 ```js
 pm.globals.set('_token', "none");
 ```

---

## :closed_lock_with_key: **Lisans**
Bu proje **MIT lisansı** altında lisanslanmıştır.

---

  
