import React, { useState } from 'react';

import uploadfileIcon from '../Images/upload-file.png';

import "../Css/Add-Product.css";

const AddProductPage = () => {
  // Фиксированные данные
  const [games] = useState([
    { id: 1, name: 'GTA 5' },
    { id: 2, name: 'Genshin Impact' },
    { id: 3, name: 'Minecraft' },
    { id: 4, name: 'Brawl Stars' },
    { id: 5, name: 'GTA San Andreas' },
    { id: 6, name: 'GTA 3' },
    { id: 7, name: 'GTA 4' },
    { id: 8, name: 'GTA Vice City' },
    { id: 9, name: 'Dota 2' },
    { id: 10, name: 'CS 2' },
    { id: 11, name: 'Volorant' },
    { id: 12, name: 'MLBB' },
  ]);

  const [productTypesData] = useState({
    1: [
      { id: 1, name: 'Аккаунты' },
      { id: 2, name: 'Золото' }
    ],
    2: [
      { id: 3, name: 'Оружие' },
      { id: 4, name: 'Экипировка' }
    ],
    3: [
      { id: 5, name: 'Скины' },
      { id: 6, name: 'Предметы' }
    ]
  });

  const [platformsData] = useState({
    1: [
      { id: 1, name: 'PC' },
      { id: 2, name: 'PS4' }
    ],
    2: [
      { id: 3, name: 'Xbox' },
      { id: 4, name: 'Nintendo' }
    ],
    3: [
      { id: 5, name: 'Mobile' },
      { id: 6, name: 'PC' }
    ]
  });

  const [selectedGame, setSelectedGame] = useState('');
  const [selectedProductType, setSelectedProductType] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('');

  const [isGameListOpen, setIsGameListOpen] = useState(false);
  const [isProductTypeListOpen, setIsProductTypeListOpen] = useState(false);
  const [isPlatformListOpen, setIsPlatformListOpen] = useState(false);

  // Функции для выбора элементов
  const handleGameSelection = (gameId, gameName) => {
    setSelectedGame({ id: gameId, name: gameName });
    setSelectedProductType(''); // Сброс типа товара
    setSelectedPlatform(''); // Сброс платформы
    setIsGameListOpen(false);
  };

  const handleProductTypeSelection = (typeId, typeName) => {
    setSelectedProductType({ id: typeId, name: typeName });
    setSelectedPlatform(''); // Сброс платформы
    setIsProductTypeListOpen(false);
  };

  const handlePlatformSelection = (platformId, platformName) => {
    setSelectedPlatform({ id: platformId, name: platformName });
    setIsPlatformListOpen(false);
  };

  return (
    <>
        <p className="add-offer-page">Главная / Меню / Выставленные / Добавить предложения</p>
        <div className='add-offer-container'>
            <div className='add-offer-window'>
                <div className='game-selection'>
                    <p className='name-game'>Сервис или игра</p>
                    <button onClick={() => setIsGameListOpen(!isGameListOpen)}>
                    {selectedGame.name || 'Выберите игру'}
                    </button>
                    {isGameListOpen && (
                    <ul>
                        {games.map((game) => (
                        <li key={game.id} onClick={() => handleGameSelection(game.id, game.name)}>
                            {game.name}
                        </li>
                        ))}
                    </ul>
                    )}
                </div>
                {selectedGame && (
                    <div className='type-offer-selection'>
                        <p className='name-type-offer'>Категория товара</p>
                    <button onClick={() => setIsProductTypeListOpen(!isProductTypeListOpen)}>
                        {selectedProductType.name || 'Выберите тип товара'}
                    </button>
                    {isProductTypeListOpen && (
                        <ul>
                        {productTypesData[selectedGame.id]?.map((type) => (
                            <li key={type.id} onClick={() => handleProductTypeSelection(type.id, type.name)}>
                            {type.name}
                            </li>
                        ))}
                        </ul>
                    )}
                    </div>
                )}
                {selectedProductType && (
                    <div className='platform-selection'>
                        <p className='name-platform-offer'>Платформа товара</p>
                        <button onClick={() => setIsPlatformListOpen(!isPlatformListOpen)}>
                            {selectedPlatform.name || 'Выберите платформу'}
                        </button>
                        {isPlatformListOpen && (
                            <ul>
                            {platformsData[selectedProductType.id]?.map((platform) => (
                                <li key={platform.id} onClick={() => handlePlatformSelection(platform.id, platform.name)}>
                                {platform.name}
                                </li>
                            ))}
                            </ul>
                        )}
                    </div>
                )}
                <div className='title-offer'>
                    <p>Название</p>
                    <label htmlFor="title-offer"></label>
                    <textarea id="title-offer" name="title" autoComplete="off"/>
                </div>
                <div className='description-offer'>
                    <p>Описание</p>
                    <label htmlFor="description-offer"></label>
                    <textarea id="description-offer" name="description" autoComplete="off" />
                </div>
                <div className='photo-offer'>
                    <p>Фото</p>
                    <input type="file" id="photo-offer" style={{ display: 'none' }} />
                    <label htmlFor="photo-offer" className="custom-photo-offer-button">
                        Загрузить фото<img src={uploadfileIcon} alt="premium-icon" className="premium-icon" />
                    </label>
                </div>
                <div className='price-and-quantity'>
                    <div className='price-offer'>
                        <p>Цена</p>
                        <label htmlFor="price-offer">₽</label>
                        <input type="text" id="price-offer" name="price" placeholder=' ' autoComplete="off"/>
                    </div>
                    <div className='quantity-offer'>
                        <p>Наличие</p>
                        <label htmlFor="quantity-offer">шт.</label>
                        <input type="text" id="quantity-offer" name="quantity" placeholder=' ' autoComplete="off"/>
                    </div>
                </div>
                <div className='add-offer-save-botton'>
                    <button type='submit'>Выставить</button>
                </div>
            </div> 
        </div>
    </>
  );
};

export default AddProductPage;
