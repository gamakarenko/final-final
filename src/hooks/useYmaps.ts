import { useState } from "react";

//@ts-ignore
const ymaps = window?.ymaps

export function useYmaps() {
    const [start, setStart] = useState('')
    const [start2, setStart2] = useState('')
        
    function onLoad (ymaps: any) {
    var suggestView = new ymaps.SuggestView('suggest', {results: 5})
    var suggestView = new ymaps.SuggestView('suggest2', {results: 5});
    }

function init(id: string){
    var myPlacemark: any
      // Создание карты.
      var myMap = new ymaps.Map(id, {
          // Координаты центра карты.
          // Порядок по умолчанию: «широта, долгота».
          // Чтобы не определять координаты центра карты вручную,
          // воспользуйтесь инструментом Определение координат.
          center: [55.76, 37.64],
          // Уровень масштабирования. Допустимые значения:
          // от 0 (весь мир) до 19.
          zoom: 7
      });
      // Слушаем клик на карте.
  myMap.events.add('click', function (e: any) {
    var coords = e.get('coords');

    // Если метка уже создана – просто передвигаем ее.
    if (myPlacemark) {
        myPlacemark.geometry.setCoordinates(coords);
    }
    // Если нет – создаем.
    else {
        myPlacemark = createPlacemark(coords);
        myMap.geoObjects.add(myPlacemark);
        // Слушаем событие окончания перетаскивания на метке.
        myPlacemark.events.add('dragend', function () {
            getAddress(myPlacemark.geometry.getCoordinates());
        });
    }
    getAddress(coords);
});

// Создание метки.
function createPlacemark(coords: any) {
    return new ymaps.Placemark(coords, {
        iconCaption: 'поиск...'
    }, {
        preset: 'islands#blueDotIconWithCaption',
        draggable: true
    });
}
    // Определяем адрес по координатам (обратное геокодирование).
    function getAddress(coords: any) {
      myPlacemark.properties.set('iconCaption', 'поиск...');
      ymaps.geocode(coords).then(function (res: any) {
          var firstGeoObject = res.geoObjects.get(0);

          myPlacemark.properties
              .set({
                  // Формируем строку с данными об объекте.
                  iconCaption: [
                      // Название населенного пункта или вышестоящее административно-территориальное образование.
                      firstGeoObject.getLocalities().length ? firstGeoObject.getLocalities() : firstGeoObject.getAdministrativeAreas(),
                      // Получаем путь до топонима, если метод вернул null, запрашиваем наименование здания.
                      firstGeoObject.getThoroughfare() || firstGeoObject.getPremise()
                  ].filter(Boolean).join(', '),
                  // В качестве контента балуна задаем строку с адресом объекта.
                  balloonContent: firstGeoObject.getAddressLine(),
              });
              setStart(firstGeoObject.getAddressLine())
              setStart2(firstGeoObject.getAddressLine())
      });
  }
}
    return {
        ymaps,
        onLoad,
        init,
        start,
        setStart,
        start2,
        setStart2
    }

}