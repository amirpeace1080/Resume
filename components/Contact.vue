<template>
  <section class="container mt-5" id="contact">
    <!--Contact heading-->
    <div class="row">
      <!--Grid column-->
      <div class="col-sm-12 col-md-7">
        <!--Google map-->
        <div class="mb-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13863072.42910002!2d62.70101449660382!3d31.973396471726144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef7ec2ec16b1df1%3A0x40b095d39e51face!2z2KfbjNix2KfZhg!5e0!3m2!1sfa!2s!4v1609757408950!5m2!1sfa!2s"
            width="600"
            height="450"
            frameborder="0"
            style="border: 0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
        <!--Buttons-->
        <div class="row text-center">
          <div class="col-md-4">
            <a
              class="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block"
              ><i class="fa fa-map-marker"></i
            ></a>
            <p dir="ltr">Iran :(</p>
          </div>
          <div class="col-md-4">
            <a
              class="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block"
              ><i class="fa fa-phone"></i
            ></a>
            <p dir="ltr">+98- 9334135275</p>
          </div>
          <div class="col-md-4">
            <a
              class="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block"
              ><i class="fa fa-envelope"></i
            ></a>
            <p dir="ltr">amirpeace1080@gmail.com</p>
          </div>
        </div>
      </div>
      <!--Grid column-->

      <!--Grid column-->
      <div class="col-sm-12 mb-4 col-md-5">
        <!--Form with header-->
        <div class="card border-primary rounded-0">
          <div class="card-header p-0">
            <div class="bg-primary text-white text-center py-2">
              <h3><i class="fa fa-envelope"></i>ارتباط با من</h3>
              <!-- <p class="m-0">فرم زیر کار نمیکنه...</p> -->
            </div>
          </div>
          <div class="card-body p-3">
            <div class="form-group text-right">
              <label> نام خود را وارد کنید</label>
              <div class="input-group">
                <input
                  value=""
                  type="text"
                  name="data[name]"
                  class="form-control"
                  id="inlineFormInputGroupUsername"
                  placeholder="مثال محمد شریفی"
                />
              </div>
            </div>
            <div class="form-group text-right">
              <label> ایمیل خود را وارد نمایید</label>
              <div class="input-group mb-2 mb-sm-0">
                <input
                  type="email"
                  value=""
                  name="data[email]"
                  class="form-control"
                  id="inlineFormInputGroupUsername"
                  placeholder="مثال amirpeace1080@gmail.com"
                />
              </div>
            </div>
            <div class="form-group text-right">
              <label>موضوع</label>
              <div class="input-group mb-2 mb-sm-0">
                <input
                  type="text"
                  name="data[subject]"
                  class="form-control"
                  id="inlineFormInputGroupUsername"
                  placeholder="مثال مشکل دانلود"
                />
              </div>
            </div>
            <div class="form-group text-right">
              <label>پیام خود را بنویسید</label>
              <div class="input-group mb-2 mb-sm-0">
                <input
                  type="text"
                  class="form-control"
                  name="mesg"
                  placeholder="متن پیام"
                />
              </div>
            </div>
            <div class="text-center">
              <input
                type="submit"
                name="submit"
                value="ارسال"
                class="btn btn-primary btn-block rounded-0 py-2"
              />
            </div>
          </div>
        </div>
      </div>
      <!--Grid column-->
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style>
#contact {
  margin-bottom: 150px;
}
</style>
