﻿using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using SonMama_Burger.Models.Entitites;
using SonMama_Burger.VM;

namespace SonMama_Burger.Controllers
{
    public class ConfirmMailController : Controller
    {
        private readonly UserManager<AppUser> userManager;
        public ConfirmMailController(UserManager<AppUser> userManager)
        {
            this.userManager = userManager;
        }
        public IActionResult Index()
        {
            var value = TempData["Mail"];
            ViewBag.Email = value;
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> Index(ConfirmMailVM confirmMailVM)
        {
            if (confirmMailVM.Email != null)
            {
                var user = await userManager.FindByEmailAsync(confirmMailVM.Email);
                if (user.ConfirmCode == confirmMailVM.ConfirmCode)
                {
                    user.EmailConfirmed = true;
                    await userManager.UpdateAsync(user);
                    return RedirectToAction("Login", "User");
                }
                ViewBag.Uyarı = "Hatalı Onay Kodu!";
            }
            ViewBag.Uyarı = "Hatalı Onay Kodu!";
            return View();
        }
    }
}
