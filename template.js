export default() => {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- JQUERY -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js" integrity="sha512-+NqPlbbtM1QqiK8ZAo4Yrj2c4lNQoGv8P79DPtKzj++l5jnN39rHA/xsqn8zE9l0uSoxaCdrOgFs6yjyfbBxSg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <!-- BOOTSTRAP -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.5.3/css/bootstrap.min.css" integrity="sha512-oc9+XSs1H243/FRN9Rw62Fn8EtxjEYWHXRvjS43YtueEewbS6ObfXcJNyohjHqVKFPoXXUxwc+q1K7Dee6vv9g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <!-- SEMANTIC -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.js" integrity="sha512-dqw6X88iGgZlTsONxZK9ePmJEFrmHwpuMrsUChjAw1mRUhUITE5QU9pkcSox+ynfLhL15Sv2al5A0LVyDCmtUw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <!-- FONTAWESOME -->
        <link rel="stylesheet" href="https://cdn.tlm.cloud/fontawesome/5.15.2/css/all.css"
              integrity="sha384-+2e4h68pmq1jygCMJInB7m4qQ8/KId/WkeL2Qcg3YjJqYqjtUV1hk6CZm3SM+I2V" crossorigin="anonymous">

        <title>React App</title>
        <link type="text/css" rel="stylesheet" href="/client/Assets/CSS/main.css">
      </head>
      <body>
        <div id="root" class="d-flex flex-column p-5"></div>
       
        <script type="text/javascript" src="/dist/bundle.js"></script>
      </body>
    </html>`
}
