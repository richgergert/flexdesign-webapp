import asyncio
from aiogram import Bot, Dispatcher, types
from aiogram.filters import Command
from aiogram.types import InlineKeyboardMarkup, InlineKeyboardButton, WebAppInfo

TOKEN = "7333891369:AAHS5aBRsJGvyhYqpLbAw1mkZnmRQl5CKTg"

bot = Bot(token=TOKEN)
dp = Dispatcher()

@dp.message(Command("start"))
async def start(message: types.Message):
    keyboard = InlineKeyboardMarkup(inline_keyboard=[
        [InlineKeyboardButton(text="Перейти в приложение", web_app=WebAppInfo(url="https://your-webapp-hosting-url"))]
    ])
    await message.answer("Добро пожаловать! Нажмите кнопку ниже, чтобы открыть приложение:", reply_markup=keyboard)

async def main():
    await dp.start_polling(bot)

if __name__ == "__main__":
    asyncio.run(main())
