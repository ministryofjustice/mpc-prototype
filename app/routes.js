//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

//POM Onboarding

//Confirmation page: Next steps
router.post('/confirmation', function (req, res) {
    var POMadded = req.session.data['POMadded']
    // Check whether the variable matches a condition
    if (POMadded == "MakeAllocations"){
     
     // Send user to make allocations page
      res.redirect('/allocations/final/make-allocations')
    } else {
      // Send user to onboarding POM search
      res.redirect('/add-pom/find-staff-member')
    }
  });




//Bulk allocation

//Edit staff profile
router.post('/editstaffprofile', function (req, res) {
  var statusPOM = req.session.data['statusPOM']
  // Check whether the variable matches a condition
  if (statusPOM == "active"){
   
   // Send user to individual POM page
    res.redirect('/staff/staff-pom-overview')

  } else if (statusPOM == "unavailable"){
    
    // Send user to individual POM page
    res.redirect('/staff/staff-pom-overview')

  } else if (statusPOM == "inactive"){
    
    // Send user to bulkallocation flow
    res.redirect('/bulkallocation/re-allocate')
  }

  else if (statusPOM == "delete"){
    
    // Send user to bulkallocation flow
    res.redirect('/bulkallocation/re-allocate')
  }


});


//Bulk allocation now or later
router.post('/reallocate', function (req, res) {
  var BulkAllocateCases = req.session.data['BulkAllocateCases']
  // Check whether the variable matches a condition
  if (BulkAllocateCases == "now"){
   
   // Send user to bulk allocation flow
    res.redirect('/bulkallocation/select-pom')
  } else {
    // Send user to staff page
    res.redirect('/staff/staff#attention-needed')
  }
});


//Confirmation page: Next steps
router.post('/confirmationbulk', function (req, res) {
  var BulkCasesAllocated = req.session.data['BulkCasesAllocated']
  // Check whether the variable matches a condition
  if (BulkCasesAllocated == "MoreBulkAllocations"){
   
   // Send user to cases for bulk allocation
    res.redirect('/bulkallocation/select-pom')
  } else {
    // Send user to staff page
    res.redirect('/staff/staff')
  }
});


//From inactive to active: Bulk reallocate back to POM or skip
router.post('/reallocateorskip', function (req, res) {
  var BulkAllocate = req.session.data['BulkAllocate']
  // Check whether the variable matches a condition
  if (BulkAllocate == "yes"){
   
   // Send user to cases for bulk allocation
    res.redirect('/bulkallocation/allocate-back/confirm-allocation')
  } else {
    // Send user to staff page
    res.redirect('/staff/staff')
  }
});








