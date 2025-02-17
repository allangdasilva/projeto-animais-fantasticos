export default function initTooltip() {
  const tooltip = document.querySelector("[data-tooltip]");
  if (tooltip) {
    function onMouseOver(event) {
      const tooltipBox = criarTooltipBox(this);
      tooltipBox.style.top = event.pageY + "px";
      tooltipBox.style.left = event.pageX + "px";

      onMouseMove.tooltipBox = tooltipBox;
      this.addEventListener("mousemove", onMouseMove);

      onMouseLeave.tooltipBox = tooltipBox;
      onMouseLeave.element = this;
      this.addEventListener("mouseleave", onMouseLeave);
    }

    const onMouseLeave = {
      tooltipBox: "",
      element: "",
      handleEvent() {
        this.tooltipBox.remove();
        this.element.removeEventListener("mouseleave", onMouseLeave);
        this.element.removeEventListener("mousemove", onMouseMove);
      },
    };
    const onMouseMove = {
      tooltipBox: "",
      handleEvent(event) {
        this.tooltipBox.style.top = event.pageY + 20 + "px";
        this.tooltipBox.style.left = event.pageX + 20 + "px";
      },
    };

    function criarTooltipBox(element) {
      const tooltipBox = document.createElement("div");
      const texto = element.getAttribute("aria-label");
      tooltipBox.classList.add("tooltip");
      tooltipBox.innerText = texto;
      document.body.appendChild(tooltipBox);
      return tooltipBox;
    }

    tooltip.addEventListener("mouseover", onMouseOver);
  }
}
