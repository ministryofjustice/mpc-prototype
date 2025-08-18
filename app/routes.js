//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

//Confirmation page: Next steps
router.post('/confirmation', function (req, res) {
    var POMadded = req.session.data['POMadded']
    // Check whether the variable matches a condition
    if (POMadded == "MakeAllocations"){
     
     // Send user to make allocations page
      res.redirect('/allocations/final/make-allocations')
    } else {
      // Send user to onboarding POM search
      res.redirect('/2025/add-pom/find-staff-member')
    }
  });


 











