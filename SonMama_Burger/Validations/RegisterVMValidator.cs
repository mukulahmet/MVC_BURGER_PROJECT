﻿using FluentValidation;
using SonMama_Burger.VM;

namespace SonMama_Burger.Validations
{
	public class RegisterVMValidator:AbstractValidator<RegisterVM>
	{
		public RegisterVMValidator()
		{
			RuleFor(x => x.Password).NotEmpty().WithMessage("Şifre boş geçilemez!").MinimumLength(8).WithMessage("Şifre en az 8 karakterden oluşmalıdır!").Matches(@"[A-Z]+").WithMessage("Şifre en az 1 büyük harf içermelidir!").Matches(@"[a-z]+").WithMessage("Şifre en az 1 küçük harf içermelidir!");

			RuleFor(x => x.Ad).NotEmpty().WithMessage("İsim boş geçilemez!");
			RuleFor(x => x.UserName).NotEmpty().WithMessage("Kullanıcı Adı boş geçilemez!");
			RuleFor(x => x.Soyad).NotEmpty().WithMessage("Soyad boş geçilemez!");
			RuleFor(x => x.Cinsiyet).NotNull().WithMessage("Cinsiyet boş geçilemez!");
			RuleFor(x => x.DogumTarihi).NotNull().WithMessage("Doğum tarihi boş geçilemez!");
			RuleFor(x => x.PhoneNumber).NotEmpty().WithMessage("Telefon Numarası boş geçilemez!");
			RuleFor(x => x.Email).NotEmpty().WithMessage("Email boş geçilemez!");
			RuleFor(x => x.Email).EmailAddress().WithMessage("Geçerli bir e-mail adresi giriniz");
		}
	}
}
