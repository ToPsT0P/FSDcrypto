import React, { useState } from 'react';
import styles from "./Pagination.module.css"
import CoinsData from '../../app/coinsData/coinsData';


function Pagination({ setPaginationFlag, paginationFlag, setCurrectPage }) {


  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20; // Общее количество страниц
  const maxButtonsToShow = 9; // Максимальное количество кнопок для показа
  const currectPage = new CoinsData()

  // Функция для обновления текущей страницы
  const goToPage = (page) => {
    setCurrentPage(page);
    setCurrectPage(currectPage)
    currectPage.pageChange(page)
    setPaginationFlag(!paginationFlag)
  };
  
  // Генерируем массив номеров страниц, которые нужно показать
  const generatePageNumbers = () => {
    const pageNumbers = [];
    let startPage, endPage;

    if (totalPages <= maxButtonsToShow) {
      // Если общее количество страниц меньше или равно максимальному количеству кнопок для показа
      startPage = 1;
      endPage = totalPages;
    } else {
      // Вычисляем начальную и конечную страницу в зависимости от текущей страницы
      if (currentPage <= Math.ceil(maxButtonsToShow / 2)) {
        startPage = 1;
        endPage = maxButtonsToShow;
      } else if (currentPage + Math.floor(maxButtonsToShow / 2) >= totalPages) {
        startPage = totalPages - maxButtonsToShow + 1;
        endPage = totalPages;
      } else {
        startPage = currentPage - Math.floor(maxButtonsToShow / 2);
        endPage = currentPage + Math.floor(maxButtonsToShow / 2);
      }
    }

    // Генерируем массив страниц
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  // Генерируем кнопки для пагинации
  const renderPageNumbers = () => {
    const pageNumbers = generatePageNumbers();


    return (
      <>
        
        {pageNumbers.map((page) => (
            <button 
            className={`${currentPage === page ? styles.active : styles.buttons}`}
            key={page}
            onClick={() => goToPage(page)}>
            {page}
          </button>
        ))}
       
      </>
    );
  };

  return (
    <div className={styles.wrapper}>
      {renderPageNumbers()}
    </div>
  );
}

export default Pagination;

