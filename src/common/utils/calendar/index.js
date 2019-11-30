import { BadgeColor } from '../../Constants';

export const _getDatesMarkedAsHolidays = (holidays, month, year) => {
    let _markedDates = {};

    if (holidays && holidays[0][year] && holidays[0][year][month]) {
        let data = holidays[0][year][month];
        data.forEach(holiday =>
            _markedDates[`${year}-${month}-${holiday.Date}`] = {
                dots: [{ color: '#E5B001', borderColor: '#E5B001' }]
            }
        );
    }

    return _markedDates;
}

export const _getDatesMarkedAsRequests = (requests, month, year) => {
    const _filterByMonthYear = (request, month, year) => {
        let dt = new Date(request.date);
        return dt.getMonth() + 1 === month && dt.getFullYear() === year;
    }

    let _markedDates = {};

    requests.filter(request => _filterByMonthYear(request, month, year)).forEach(request =>
        _markedDates[request.date] = {
            dots: [
                { color: BadgeColor[request.firstHalf], borderColor: BadgeColor[request.firstHalf] },
                { color: BadgeColor[request.secondHalf], borderColor: BadgeColor[request.secondHalf] }
            ]
        }
    );

    return _markedDates;
}
