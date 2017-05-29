function filterBy(list, value) {
  return list.filter(function(item) {
    const combined = [item.keyword.toLowerCase(), item.creator.username.toLowerCase()].join(' ')
    return combined.indexOf(value.toLowerCase()) > -1
  })
}

export {filterBy}
