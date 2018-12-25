<template>
  <div>
    <p
      class="text-center"
    >Fill out the form below with some info about you and question what you wanna ask for. Or wanna work with? Feel free to contact!</p>
    <form class="form-horizontal">
      <div class="form-group">
        <div class="col-sm-6">
          <label>Name</label>
          <input type="text" class="form-control form-bordered">
        </div>
        <div class="col-sm-6">
          <label>Email</label>
          <input type="email" class="form-control form-bordered">
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-12">
          <label>Message</label>
          <textarea class="form-control form-bordered" rows="8"></textarea>
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-12">
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
    <!-- .form-horizontal -->
  </div>
</template>
