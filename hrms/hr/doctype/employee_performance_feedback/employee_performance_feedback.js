// Copyright (c) 2022, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on("Employee Performance Feedback", {
	refresh: function(frm) {
		frm.set_query("appraisal", () => {
			return {
				filters: {
					employee: frm.doc.employee,
					appraisal_cycle: frm.doc.appraisal_cycle,
				}
			}
		});
	},

	appraisal: function(frm) {
		if (frm.doc.employee) {
			frm.call("set_feedback_criteria", () => {
				frm.refresh_field("feedback_ratings");
			});
		}
	},
});
