const headerStore = {
  namespaced: true,
  state: {
    activityModalVisible: false,
    profileModalVisible: false,
    npModalVisible: false,
    searchModalVisible: false,
    toolTipVisible: false,
  },
  mutations: {
    setActivityModalVisible (state, value) {
      state.activityModalVisible = value
    },
    setProfileModalVisible (state, value) {
      state.profileModalVisible = value
    },
    setNPModalVisible (state, value) {
      state.npModalVisible = value
    },
    setSearchModalVisible (state, value) {
      state.searchModalVisible = value
    },
    setToolTipVisible (state, value) {
      state.toolTipVisible = value
    },
    closeModals (state) {
      state.activityModalVisible = false
      state.profileModalVisible = false
      state.searchModalVisible = false
    }
  }
}

export default headerStore
